interface Car {
    year: number;
    make: string;
    model: string;
}
// function formatCar(car: { year: number, model: string, make: string }) {
function formatCar(car: Car) {
    return `Year: ${car.year}, model: ${car.model}, make: ${car.make}`;
}
formatCar({
    year: 2015,
    make: 'Ford',
    model: 'Mustang'
});