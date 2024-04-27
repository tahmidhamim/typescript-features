function wrapInArray<T>(value: T): T[] {
    return [value];
}

const result = wrapInArray<string>('jfbndfjgb');
const result1 = wrapInArray<number>(10);


function toRecord<T, U>(id: U, value: T) {
    return {
        id,
        value
    };
}

const result2 = toRecord<string, number>(123, 'my@email.com');
const result3 = toRecord<number[], string>('ea01', [1, 5, 7]);


function randomElement<T>(arr: T[]) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

const result4 = randomElement<number>([1, 2, 3]);
const result5 = randomElement<string>(['a', 'b', 'c']);