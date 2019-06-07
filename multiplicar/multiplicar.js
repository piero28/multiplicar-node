const FileSystem = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('=============================='.trap);
    console.log(`========= Tabla de ${ base } =========`.trap);
    console.log('=============================='.trap);
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} x ${index} = ${base * index} \n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if(!Number(limite)){
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} x ${index} = ${base * index} \n`;
        }

        FileSystem.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        })

    });
}

/** module.exports.crearArchivo = (base) otra manera de exportar el modulo */

module.exports = {
    crearArchivo,
    listarTabla
};











