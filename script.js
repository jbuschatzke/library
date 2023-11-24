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

let i = 0; //initialize a tracking variable for dataset-index to match myLibrary object indices

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
        const liEelement = document.createElement("li");
        liEelement.innerText = `${key}: ${objIndex[key]}`;
        list.appendChild(liEelement);
    }

    //attach list to the previously created bookCard div
    bookCard.appendChild(list);
    //create Remove Entry button that will target it's closest div.book-card to delete

    const removeEntryButton = document.createElement("button");
    removeEntryButton.setAttribute("class", "remove-button");
    removeEntryButton.textContent = "Remove Entry";
    removeEntryButton.addEventListener("click", (e) => {
        let indexTarget = e.target.closest("div.book-card").getAttribute("dataset-index");
        myLibrary.splice(indexTarget, 1);
        e.target.closest("div.book-card").remove();
    });
    bookCard.appendChild(removeEntryButton);
    };
};

//Constructor
function Book (title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
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