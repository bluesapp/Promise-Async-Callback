import { obtenerHerosArr, obtenerHeroeAwait } from './js/await';


// console.time('Await')
//  obtenerHerosArr().then(heroe => {
//      console.table(heroe);
//      console.timeEnd('Await');

//     });


console.time('Await')
obtenerHeroeAwait('capis')
    .then(heroe => {
        console.log(heroe);
        console.timeEnd('Await');

    }).catch(console.warn);
