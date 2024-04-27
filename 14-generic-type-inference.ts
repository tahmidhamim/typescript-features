function wrapInArray1<TypeOfValue>(value: TypeOfValue): TypeOfValue[] {
    return [value];
}

const result6 = wrapInArray1('a');
const result7 = wrapInArray1(123);


function callAndReturn<T>(fn: () => T): T {
    return fn();
}

const result8 = callAndReturn(() => 5);
const result9 = callAndReturn(() => 'asdfjhfgjg');