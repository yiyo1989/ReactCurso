
const heroe= {
    nombre: 'Tony',
    edad: 55,
    nickname: 'Ironman',
    direccion: {
    lat: 1,
    alt: 2
    }
    };
    
    const userContext= ({nombre,edad,direccion}) => ({
       
       nombre:nombre,
    direccion: direccion
        // console.log(nombre,edad);
    });
    
    const {nombre,edad,nickname, direccion}= userContext(heroe);
    
    const {direccion:{lat,alt}}=userContext(heroe);
    
    console.log(nombre,edad,nickname,direccion);
    
    console.log(lat,alt);