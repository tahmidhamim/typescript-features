interface Image {
    src: string;
}

type LoggableValue = string | number | string[] | Image;

function logValue1(value: LoggableValue) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    if (typeof value === 'number') {
        console.log(Math.round(value));
    }
    if (Array.isArray(value)) {
        console.log(value.join(''));
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
        console.log(value.src);
    }
}