
import {heroes,owners} from './data/heroes';


console.log(owners);

const getHeroById= (id) => 
    heroes.find( (heroe) => heroe.id===id);

const getHeroByOwner= (owner) => 
    heroes.filter( (heroe) => heroe.owner===owner);


console.log(getHeroByOwner('Marvel'));

export {
    getHeroById,
    getHeroByOwner
}