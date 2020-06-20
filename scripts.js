const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com'
];

const googleSearch = (searchInput, db) => {
  return db.filter(website => website.includes(searchInput)).slice(0, 3);
};

//console.log(googleSearch('cats', googleDatabase));

module.exports = googleSearch;