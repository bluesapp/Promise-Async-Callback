// import { buscarHeroe } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css'

const heroeID1 = 'capi';
const heroeID2 = 'iron';

// buscarHeroe(heroeID1, (err, heroe1)=>{

//     if (err) {return console.error(err);} 

//     buscarHeroe( heroeID2, (err, heroe2)=>{
//         if (err) {return console.error(err);} 
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);

//     });

// })

// Promesas
/* buscarHeroe(heroeID1).then(heroe1 => {

    buscarHeroe(heroeID1).then(heroe2 => {

        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}a la mision`);
    
    })
}) */

//Promesas.all

Promise.all([buscarHeroe(heroeID1), buscarHeroe(heroeID2)])
    .then(([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}a la mision`);
    }).catch(err => {
        alert(err)
    }).finally(() => {
        console.log('Se termino el proceso');
    })


import { promesaLenta, promesaMedia, promesaRapida } from './promesas';
// promesaLenta.then(console.log) // E igual  promesaLenta.then(mensaje => console.log(mensaje))
// promesaMedia.then(console.log)
// promesaRapida.then(console.log)


// Promise.race Devuelve la primera promesa que se ejecuta
Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(mensaje => console.log(mensaje))
    .catch(console.warn)


import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

buscarHeroe('capis')
    .then(console.log)
    .catch(console.warn)

buscarHeroeAsync('irons')
    .then(console.log)
    .catch(console.warn)