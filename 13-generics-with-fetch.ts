interface User {
    username: string;
}
interface Message {
    content: string;
}
interface Image {
    url: string;
}

async function fetchData<T>(path: string): Promise<T> {
    const res = await fetch(path);
    const json = await res.json();

    return json as T;
}

const run1 = async () => {
    const user = await fetchData<User>('/users');
    const message = await fetchData<Message>('/messages');
    const image = await fetchData<Image>('/images');
};