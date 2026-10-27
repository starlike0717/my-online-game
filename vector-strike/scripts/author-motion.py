"""Blender source for VECTOR's editable motion controls and runtime curves.
Run: blender --background --factory-startup --python scripts/author-motion.py
The scene uses game coordinates (Y up, +Z forward), metres and radians.
"""
import bpy, json, math
from pathlib import Path
from mathutils import Vector, Matrix
ROOT=Path(__file__).resolve().parents[1]
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
scene=bpy.context.scene;scene.render.fps=60;scene.frame_start=0;scene.frame_end=120
controls=bpy.data.objects.new('VECTOR_Motion_Controls',None);scene.collection.objects.link(controls)
# Keys are normalized times. AUTO_CLAMPED Bézier prevents overshoot at contact.
clips={
 'reload':{'weight':[(0,0),(.13,1),(.80,1),(1,0)],'magOut':[(0,0),(.17,0),(.34,1),(.48,1),(.70,0),(1,0)],'grip':[(0,0),(.10,0),(.19,1),(.69,1),(.76,0),(1,0)],'rack':[(0,0),(.74,0),(.82,1),(.86,1),(.95,0),(1,0)],'reach':[(0,0),(.23,1),(.66,1),(.94,0),(1,0)],'insert':[(0,0),(.26,0),(.43,1),(.56,1),(.76,0),(1,0)],'roll':[(0,0),(.18,-.36),(.48,-.42),(.72,-.30),(.86,-.21),(1,0)]},
 'crouch':{'hipsY':[(0,0),(1,-.56)],'hipsZ':[(0,0),(1,-.13)],'spineX':[(0,0),(1,.62)],'thighX':[(0,0),(1,-1.4)],'kneeX':[(0,0),(1,2.7)],'ankleX':[(0,0),(1,-1.3)],'weaponY':[(0,0),(1,-.025)]},
 'slide':{'hipsY':[(0,0),(1,-.75)],'hipsZ':[(0,0),(1,-.08)],'spineX':[(0,0),(.35,-.10),(1,-.65)],'thighX':[(0,0),(1,-1.48)],'kneeX':[(0,0),(1,.34)],'ankleX':[(0,0),(1,1.14)],'weaponY':[(0,0),(.35,-.04),(1,-.08)],'weaponRoll':[(0,0),(1,-.12)]},
 'fire':{'impact':[(0,0),(.055,1),(.19,.72),(.43,.25),(.74,.035),(1,0)],'shoulder':[(0,0),(.12,1),(.32,.70),(.70,.10),(1,0)],'bolt':[(0,0),(.065,1),(.22,1),(.40,0),(1,0)]},
 'hit':{'impact':[(0,0),(.09,1),(.27,.55),(.62,.12),(1,0)],'head':[(0,0),(.18,1),(.43,.4),(1,0)]},
 'nock':{'pull':[(0,0),(.20,0),(.37,1),(.49,1),(.70,0),(1,0)]}
}
export={}
for name,channels in clips.items():
 controls.animation_data_clear()
 for key,keys in channels.items():
  for t,value in keys:
   controls[key]=float(value);controls.keyframe_insert(data_path='["'+key+'"]',frame=t*120,group=name)
 action=controls.animation_data.action;action.name='VECTOR_'+name;action.use_fake_user=True
 for fc in action.fcurves:
  for key in fc.keyframe_points:key.interpolation='BEZIER';key.handle_left_type='AUTO_CLAMPED';key.handle_right_type='AUTO_CLAMPED'
 export[name]={key:[round(next(fc for fc in action.fcurves if fc.data_path=='["'+key+'"]').evaluate(i),6) for i in range(121)] for key in channels}
controls.animation_data_clear()
controls.animation_data_create();controls.animation_data.action=bpy.data.actions['VECTOR_crouch']
# A fully parented pose mannequin, editable together with the action controls.
def empty(name,parent=None,at=(0,0,0)):
 o=bpy.data.objects.new(name,None);scene.collection.objects.link(o);o.parent=parent;o.location=at;return o
def material(name,color):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);return m
olive=material('Uniform',(.22,.31,.25));dark=material('Armor',(.06,.09,.08));lime=material('Visor',(.60,.86,.25))
def cube(name,parent,at,size,mat):
 bpy.ops.mesh.primitive_cube_add(size=1);o=bpy.context.object;o.name=name;o.parent=parent;o.location=at;o.scale=size;o.data.materials.append(mat);return o
def driver(obj,path,index,key):
 fc=obj.driver_add(path,index);d=fc.driver;d.type='SCRIPTED';v=d.variables.new();v.name='pose';v.targets[0].id=controls;v.targets[0].data_path='["'+key+'"]';d.expression='pose'
hips=empty('Hips',at=(0,.9,0));chest=empty('Spine',hips,at=(0,.26,0));head=empty('Head',chest,at=(0,.78,0))
cube('Pelvis',hips,(0,0,0),(.57,.3,.38),dark);cube('Torso',chest,(0,.19,0),(.76,.62,.42),olive);cube('Helmet',head,(0,0,0),(.46,.43,.44),olive);cube('Visor',head,(0,0,.235),(.36,.13,.025),lime)
for side in [-1,1]:
 thigh=empty('Thigh_'+str(side),hips,(side*.2,0,0));knee=empty('Knee_'+str(side),thigh,(0,-.48,0));ankle=empty('Ankle_'+str(side),knee,(0,-.34,.13))
 cube('Upper_leg',thigh,(0,-.23,0),(.25,.44,.28),olive);cube('Shin',knee,(0,-.17,0),(.23,.34,.25),dark);cube('Boot',ankle,(0,0,0),(.30,.16,.50),dark)
 for obj,key in [(thigh,'thighX'),(knee,'kneeX'),(ankle,'ankleX')]:driver(obj,'rotation_euler',0,key)
 shoulder=empty('Shoulder_'+str(side),chest,(side*.48,.41,0));elbow=empty('Elbow_'+str(side),shoulder,(0,-.32,.1));cube('Upper_arm',shoulder,(0,-.15,0),(.23,.32,.26),olive);cube('Forearm',elbow,(-side*.1,-.1,.24),(.20,.20,.48),olive)
# Hips location driver adds the rest height.
for i,key in [(1,'hipsY'),(2,'hipsZ')]:
 driver(hips,'location',i,key)
 if i==1:hips.animation_data.drivers[-1].driver.expression='.9+pose'
driver(chest,'rotation_euler',0,'spineX')
gun=empty('Weapon',chest,(.07,.06,.79));cube('Receiver',gun,(0,0,0),(.18,.15,.86),dark);cube('Barrel',gun,(0,0,.55),(.06,.06,.4),dark)
# Non-destructive preview cameras and lighting, with game-coordinate Y up.
world=scene.world;world.color=(.13,.16,.18)
for name,at,energy,size in [('Key',(3,6,4),1000,5),('Fill',(-4,3,2),650,4)]:
 data=bpy.data.lights.new(name,'AREA');data.energy=energy;data.shape='DISK';data.size=size;o=bpy.data.objects.new(name,data);scene.collection.objects.link(o);o.location=at;o.rotation_euler=(Vector((0,1,0))-o.location).to_track_quat('-Z','Y').to_euler()
camdata=bpy.data.cameras.new('Pose review');cam=bpy.data.objects.new('Pose review',camdata);scene.collection.objects.link(cam);cam.location=(4,2.6,5);cam.rotation_euler=(Vector((0,1,0))-cam.location).to_track_quat('-Z','Y').to_euler();forward=(Vector((0,1,0))-cam.location).normalized();right=forward.cross(Vector((0,1,0))).normalized();up=right.cross(forward);cam.rotation_euler=Matrix((right,up,-forward)).transposed().to_euler();camdata.type='ORTHO';camdata.ortho_scale=3.2;scene.camera=cam
scene.render.engine='BLENDER_EEVEE_NEXT';scene.render.resolution_x=640;scene.render.resolution_y=640;scene.render.resolution_percentage=100
scene.frame_set(120)
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT/'assets/animation/vector-motion.blend'))
(ROOT/'dist/motion-clips.js').write_text('// Generated by Blender 4.5 LTS. Edit scripts/author-motion.py and rebuild.\nexport const motionClips='+json.dumps(export,separators=(',',':'))+';\n')
# Still previews of the editable 3D pose; runtime geometry is tested separately.
for name in ['crouch','slide']:
 controls.animation_data.action=bpy.data.actions['VECTOR_'+name];scene.frame_set(120);scene.render.filepath=str(ROOT/'.runtime'/('blender-'+name+'.png'));bpy.ops.render.render(write_still=True)
print('VECTOR_MOTION_EXPORTED', len(export), 'actions')
