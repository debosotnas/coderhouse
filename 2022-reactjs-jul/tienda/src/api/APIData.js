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

export function getProductsData (categoryId) {
    console.log('> CategoryId: ', categoryId)
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (categoryId) {
                resolve(DATA.filter(prod => prod.category === categoryId));
            } else {
                resolve(DATA);
            }
        }, TESTING_DELAY);
    });
}

export function getItem (id) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(DATA.find(prod => prod.id === id));
        }, TESTING_DELAY);
    });
}