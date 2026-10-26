// Bootstrap credentials are supplied privately by the hosting environment.
export function readAdminConfig(env=process.env){
 const username=String(env.VECTOR_ADMIN_USER||'').trim().toLowerCase();
 const parts=String(env.VECTOR_ADMIN_CREDENTIAL||'').split(':');
 if(!username&&!parts.join(''))return null;
 if(!/^[a-z0-9_가-힣]{2,20}$/u.test(username)||parts.length!==2||!/^[a-f0-9]{32}$/i.test(parts[0])||!/^[a-f0-9]{128}$/i.test(parts[1]))throw Error('Administrator environment configuration is invalid');
 return {username,salt:parts[0],passwordHash:parts[1]};
}
export function bootstrapAdmin(users,config,initialProgress){
 if(!config)return false;
 const existing=users.get(config.username),user=existing||{username:config.username,createdAt:Date.now(),records:[],progress:initialProgress};
 const changed=user.role!=='admin'||user.salt!==config.salt||user.passwordHash!==config.passwordHash;
 Object.assign(user,{salt:config.salt,passwordHash:config.passwordHash,role:'admin'});users.set(config.username,user);return changed;
}
