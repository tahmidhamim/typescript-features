interface Car1 {
    model: string;
    year: number;
}

function printCar1(car1: Car1) {
    console.log(car1);
}

const mustang: Car1 = {
    model: 'Mustang',
    year: 2015
};

const camaro: Car1 = {
    model: 'Camaro',
    year: 2010
};

printCar1(mustang);
printCar1(camaro);