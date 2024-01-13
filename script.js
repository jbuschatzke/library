const myLibrary = [];

const cardContainer = document.getElementById("card-container");

//Iterate through each object of myLibrary

let i = 0; //initialize a tracking variable for dataset-index to match myLibrary object indices
let targetBook;
let indexTarget;

function displayLibrary() 

    {for (const objIndex of myLibrary) {
    //create div with class book-card to display the contents of each object
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("dataset-index", i)
    i++;
    cardContainer.appendChild(bookCard);

    //create a list to hold each attribute of the array objects
    const list = document.createElement("ul");
    list.setAttribute("class", objIndex);

    //append each key item per objIndex as a list item
    for (const key in objIndex) {
        if (objIndex.hasOwnProperty(key)){
            if (key != "Read") {
            const liEelement = document.createElement("li");
            liEelement.innerText = `${key}: ${objIndex[key]}`;
            list.appendChild(liEelement);
            }
        }
    };

    //attach list to the previously created bookCard div
    bookCard.appendChild(list);


    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "button-container");
    bookCard.appendChild(buttonContainer);

    //create button to change read or not read yet

    const changeReadButton = document.createElement("button");
    changeReadButton.setAttribute("class", "change-read-button");
    //dynamically set button text
    if (myLibrary[buttonContainer.parentNode.getAttribute("dataset-index")].Read === "Read"){
        changeReadButton.textContent = "Read";
        changeReadButton.style.backgroundColor = "#87c712";
    } else {
        changeReadButton.textContent = "Not Read";
    };
    changeReadButton.addEventListener("click", (e) => {
        indexTarget = e.target.closest("div.book-card").getAttribute("dataset-index");
        targetBook = myLibrary[indexTarget];
        targetBook.changeRead();
    });
    buttonContainer.appendChild(changeReadButton);

    //create Remove Entry button that will target it's closest div.book-card to delete
    const removeEntryButton = document.createElement("button");
    removeEntryButton.setAttribute("class", "remove-button");
    removeEntryButton.textContent = "X";
    removeEntryButton.addEventListener("click", (e) => {
        let indexTarget = e.target.closest("div.book-card").getAttribute("dataset-index");
        myLibrary.splice(indexTarget, 1)
        e.target.closest("div.book-card").remove();
        //reprint library with fresh dataset-indexes
        document.querySelectorAll(".book-card").forEach(el => el.remove());
        i = 0;
        displayLibrary();
    });
    bookCard.prepend(removeEntryButton);
    };

    let emptyMessage = document.createElement("div");
    emptyMessage.setAttribute("class", "empty-message");
    emptyMessage.textContent = "Click the 'Add Book To Library' button at the top of the page to add a book to your library!";
    if (myLibrary.length == 0) {
        cardContainer.appendChild(emptyMessage);
    } else if (myLibrary.length > 0) {
        document.querySelectorAll(".empty-message").forEach(el => el.remove());
    }
};

//Class constructor
class Book {
    constructor(title, author, pages, read){
        this.Title = title;
        this.Author = author;
        this.Pages = pages;
        this.Read = read;
    }
};

Book.prototype.changeRead = function() {
    if (this.Read === "Read") {
        this.Read = "Not Read Yet";
        document.querySelectorAll(".book-card").forEach(el => el.remove());
        i = 0;
        displayLibrary();
    } else if (this.Read === "Not Read Yet") {
        this.Read = "Read";
        document.querySelectorAll(".book-card").forEach(el => el.remove());
        i = 0;
        displayLibrary();
    }
};

function addBookToLibrary() {
    if (radioBtnYes.checked) {
        myLibrary.push(new Book(title.value, author.value, pages.value, "Read"));
        i = 0;
    } else {
        myLibrary.push(new Book(title.value, author.value, pages.value, "Not Read Yet"));
        i = 0;
    }
};

const bookBtn = document.getElementById("new-book");
const dialog = document.querySelector("dialog");
const closeBtn = document.getElementById("close-button");
const submitBtn = document.getElementById("submit-button");
const radioBtnYes = document.getElementById("read-yes");
const radioBtnNo = document.getElementById("read-no");
const bookForm = document.getElementById("book-form");

bookBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", (event) => {
    dialog.close();
    bookForm.reset();
    event.preventDefault();
});

submitBtn.addEventListener("click", (event) => {
    addBookToLibrary();
    dialog.close();
    document.querySelectorAll(".book-card").forEach(el => el.remove());
    displayLibrary();
    bookForm.reset();
    event.preventDefault();
});

console.log(myLibrary);
displayLibrary();