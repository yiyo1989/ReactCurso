
const usuarioInactivo = (nombre) => `Hola el usuario inactivo es: ${ nombre} `;

const usuarioActivo= (nombre) =>
( {uid: 1,
    userName: nombre
});


console.log(usuarioActivo('Yiyo'));
console.log(usuarioInactivo('Tina'));