

const nombre = 'Guidion';
const apellido= 'Bojorges';

const nomCompleto= `${nombre} ${apellido}`;

function getSaludo(nombre){
    return `Hola ${nombre}`;
}

const getSaludo2 = (nombre) => `Hola2 ${nombre}`;

console.log(nomCompleto);

console.log(getSaludo('Yiyo'));
console.log(getSaludo2('Sweedish Mafia'));
