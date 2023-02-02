const getTheTitles = function(books) {
    const titles = books.map(book => book.title)
    console.log(titles);
    removeWhiteSpaceFromArray(titles);
    console.log(titles);
    return titles;
};

function removeWhiteSpaceFromArray(array){
    return array.filter((item) => item != ' ');
}

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
];
getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
