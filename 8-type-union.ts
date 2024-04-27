interface Image {
    src: string;
}

interface User {
    username: string;
}

function logOutput(value: string | number | string[] | Image) {
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

logOutput('hi there');
logOutput(123);
logOutput(['hi', 'there']);
logOutput({ src: 'img.jpg' });

function isUser(value: Image | User): value is User {
    return 'username' in value;
}

 function logOutput2(value: Image | User) {
    if (isUser(value)) {
        console.log(value.username);
    } else {
        console.log(value.src);
    }
 }

 logOutput2({ src: 'img.jpg' });
 logOutput2({ username: 'asldkfj' });