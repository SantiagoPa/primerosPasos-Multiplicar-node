// requires
// const fs=require('express') externa de node
// const fs=requiere('./fs') uno mismo crea

const fs = require('fs');
const { resolve } = require('path');

let listarTabla=(base,limite=10)=>{
    let data='';
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite=10)=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`El valor ingresado: <${base}>, no es un numero`);
            return;
        }
        let data="";
        for (let i = 1; i <=limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-del-${base}-al-${limite}.txt`);

        });
    });
}
module.exports={
    crearArchivo,
    listarTabla
}

