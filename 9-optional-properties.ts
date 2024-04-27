interface UserProfile {
    likes: string[];
}

interface User1 {
    id: string;
    username: string;
    profile?: UserProfile;
}

const user: User1 = {
    id: 'abc',
    username: 'me',
    profile: {
        likes: ['cats']
    }
};

if (user.profile) {
    user.profile.likes;
}

user.profile?.likes;

 
function logValue(value: string, message?: string) {
    if (message) {
        console.log(message, value);
    } else {
        console.log(value);
    }
}

logValue('fghgts');
logValue('ffgbdfg', 'SOMETHING ELSE');