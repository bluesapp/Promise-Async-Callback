import { buscarHeroeAsync, buscarHeroe } from "./promesas";


const heroesIds = ['capi', 'iron', 'spider'];


// good
// export const obtenerHerosArr = async () => {

//     const heroesArr = [];

//     for (const id of heroesIds) {
//       const heroe = await  buscarHeroeAsync(id)
//       heroesArr.push( heroe)
//     }

//     return heroesArr

// }


// Better 
// export const obtenerHerosArr = async () => {

//     const heroesArr = [];

//     for (const id of heroesIds) {
//             heroesArr.push(buscarHeroe(id))
//     }

//     return await Promise.all(heroesArr)

// }


// Better simplfying
export const obtenerHerosArr = async () => {

    return await Promise.all(heroesIds.map(buscarHeroe))

}


export const obtenerHeroeAwait = async (id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe

    } catch (err) {
        console.log('CATH !!! - ');
        // throw err;

        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
        
    }



}