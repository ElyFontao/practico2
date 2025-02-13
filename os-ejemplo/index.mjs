import os from 'os';

//obtener la aquitectura del sistema
console.log ('Arquitectura:' , os.arch());

//obtener el tipo de sistema operativo
console.log ('Plataforma:', os.platform ());

//obtener la cantidad total de memoria
console.log ('Memoria tota:', os.totalmem ());

//obtener la memoria libre
console.log ('Infomación de la PC:', os.cpus);

//Obtener la información de a cpu
console.log ('Información de la CPU:', os.cpus ());