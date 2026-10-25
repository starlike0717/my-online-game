// A reload transfers rounds from reserve; it never creates ammunition.
export function refillMagazine(weapon,ammo,reserve){
 const loaded=Math.min(Math.max(0,weapon.mag-ammo),Math.max(0,reserve));
 return {ammo:ammo+loaded,reserve:reserve-loaded};
}
