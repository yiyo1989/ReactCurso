import { getHeroById } from "./08-imp-exp";




const getHeroByAsync= (id) =>
    { 
        return new Promise( (resolve,reject) => {
setTimeout(() => {
        const heroe = getHeroById(id);
       if(heroe)
       { resolve(heroe,'1');}
    else
    {reject('No se pudo encontrar el heroe');}

}, 2000);
        }
    );
}
    
const getHeroByAsync2 = (id) => 
    new Promise((resolve, reject) => 
        setTimeout(() => (getHeroById(id) ? resolve(getHeroById(id)) : reject('No se pudo encontrar el heroe')), 2000));




getHeroByAsync2(2).then(console.log,console.log)
.catch(console.warn);