const myLibrary = [
    {
        "Title": "Good Omens",
        "Author": "Terry Pratchett and Neil Gaiman",
        "Pages": 400,
        "Read": "not read yet",
    }
    ,
    {
        "Title": "Twilight",
        "Author": "Stephenie Meyer",
        "Pages": 544,
        "Read": "read",
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

const bookBtn = document.getElementById("new-book");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("dialog button");

bookBtn.addEventListener("click", function(){
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

function addBookToLibrary() {

};

const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");

console.log(theHobbit.info());
console.log(myLibrary);
addBookToLibrary();