function merge<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB };
}

const result10 = merge(
    { id: 'asdf' },
    { color: 'red' }
);
 

interface Product {
    name: string;
    count: number;
}

type ProductKeys = keyof Product;

const key: ProductKeys = 'name';


function collect<T extends keyof U, U extends object>(key: T, arr: U[]) {
    return arr.map(el => el[key]);
}

const result11 = collect('name', [
    { count: 1, name: 'asjdjf' },
    { count: 20, name: 'apple' }
]);
const result12 = collect('count', [
    { count: 1, name: 'asjdjf' },
    { count: 20, name: 'apple' }
]);