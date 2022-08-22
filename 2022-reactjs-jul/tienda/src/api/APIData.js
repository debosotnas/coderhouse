import { collection, getDocs } from 'firebase/firestore'
import { DB } from './APIFirebase'

// esta variable ya no es usada cuando se cargan los productos por categoria
// queda pendiente la búsqueda por categoría y la búsqueda individual
// (luego será eliminada)
export const DATA = [
    {
        id: 1,
        category: 1,
        title: 'phone 1',
        description: 'this is the first description',
        stock: 3,
        initial: 1,
        price: 10,
        images: [
            { 
                id: 0,
                src: 'https://www.techwalls.com/wp-content/uploads/2011/09/starTAC.jpg',
            }
        ] 
    },
    {
        id: 2,
        category: 1,
        title: 'phone 2',
        description: 'this is the second description',
        stock: 5,
        initial: 1,
        price: 15,
        images: [
            { 
                id: 0,
                src: 'https://www.techwalls.com/wp-content/uploads/2011/09/starTAC.jpg',
            }
        ] 
    },
    {
        id: 3,
        category: 2,
        title: 'phone 3',
        description: 'this is the third description',
        stock: 6,
        initial: 1,
        price: 20,
        images: [
            { 
                id: 0,
                src: 'https://www.technopat.net/vt/wp-content/uploads/2016/10/Motorola-StarTAC-Rainbow-580x500.jpg',
            }
        ] 
    },
    {
        id: 4,
        category: 2,
        title: 'phone 4',
        description: 'this is the fourth description',
        stock: 10,
        initial: 1,
        price: 25,
        images: [
            { 
                id: 0,
                src: 'https://www.technopat.net/vt/wp-content/uploads/2016/10/Motorola-StarTAC-Rainbow-580x500.jpg',
            }
        ] 
    }
]



const TESTING_DELAY = 500;

export function getProductsDataOld (categoryId) {

    // TODO: Realizar un refactor utilizando Async/Await en lugar de Promise.then

    return new Promise( (resolve, reject) => {
        // creo la referencia a la coleccion que quiero traer
        const colRef = collection(DB,'productos');
        getDocs(colRef).then((snapshot) => {
            console.log('>> snapshot.docs: ', snapshot.docs);


            const productosConFormato = snapshot.docs.map((rawDoc) => {
                return {
                    id: rawDoc.id,
                    ...rawDoc.data()
                }

            });

            console.log('>> Productos:', productosConFormato);
            resolve(productosConFormato);

        }, (error) => {
            reject('>> Error al intentar traer los docs: ', error);
        });
    });


}

// version simplificada de 'getProductsDataOld' usando async/await
export async function getProductsData (categoryId) {

    let response = [];
    // creo la referencia a la coleccion que quiero traer
    const colRef = collection(DB,'productos');

    try {
        const snapshot = await getDocs(colRef); // ya no necesito más el then

        response = snapshot.docs.map((rawDoc) => {
            return {
                id: rawDoc.id,
                ...rawDoc.data()
            }
        });
        
    } catch (err) {
        console.log('>> Error al intentar traer los docs: ', err);
    } 
    return response;
}

export function getItem (id) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(DATA.find(prod => prod.id === id));
        }, TESTING_DELAY);
    });
}