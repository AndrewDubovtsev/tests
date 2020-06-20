const googleSearch = require('./scripts');

const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
];

describe('googleSearch', () => {
    it('it is searching google', () => {
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
    });

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });

    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});
