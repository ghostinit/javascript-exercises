const getTheTitles = function (objArr) {
    return objArr.map((item) => {
        return item.title;
    })
};

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

getTheTitles(books) // ['Book','Book2']

// Do not edit below this line
module.exports = getTheTitles;

