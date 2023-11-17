const myLibrary = [
    {
        "title": "Good Omens",
        "author": "Terry Pratchett and Neil Gaiman",
        "pages": 400,
        "read": "not read yet",
    }
    ,
    {
        "title": "Twilight",
        "author": "Stephenie Meyer",
        "pages": 544,
        "read": "read",
    }
];

const cardContainer = document.getElementById("card-container");

//Iterate through each object of myLibrary

for (const objIndex of myLibrary) {

    //create div with class book-card to display the contents of each object
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    cardContainer.appendChild(bookCard);

    //create a list to hold each attribute of the array objects
    const list = document.createElement("ul");
    list.setAttribute("class", objIndex);

    //append each key item per objIndex as a list item
    for (const key in objIndex) {
        const liEelement = document.createElement("li");
        liEelement.innerText = `${key}: ${objIndex[key]}`;
        list.appendChild(liEelement);
    }

    //attach list to the previously created bookCard div
    bookCard.appendChild(list);
}

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    };
};


function addBookToLibrary() {
    const bookBtn = document.getElementById("new-book");
    bookBtn.addEventListener("onclick", function(){

    });
    myLibrary.push(theHobbit);
};

const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");

console.log(theHobbit.info());
console.log(myLibrary);
addBookToLibrary();