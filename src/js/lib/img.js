import md5 from 'md5';

export const getGravatarImage = email => {
    const mdHash = md5(email);
    return `https://www.gravatar.com/avatar/${mdHash}?d=mp`;
}