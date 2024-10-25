

const dataSaludo= (val) => (
       
    [val,()=>{console.log('Hola Mundo')}]
 );

const [nombre,setNombre] = dataSaludo('Goku');

console.log(nombre);


console.log(setNombre());
//setNombre();