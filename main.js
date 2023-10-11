const myLibrary = []; // an array to store the books

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
    displayBooks();
}

const bookForm = document.querySelector('.book-form')
const displayLibrary = document.querySelector('.library')

function displayBooks() {

    displayLibrary.innerHTML = ''

    for (let i = 0; i < myLibrary.length; i++) {

        let book = myLibrary[i]

        const bookCard = document.createElement('div')

        const titleText = document.createElement('h1')
        titleText.textContent = book.title

        const authorText = document.createElement('p')
        authorText.textContent = book.author

        const pagesText = document.createElement('p')
        pagesText.textContent = book.pages

        const readText = document.createElement('p')
        readText.textContent = book.read ? "Read" : "Not Read"

        const removeBtn = document.createElement('button')
        removeBtn.textContent = 'remove'
        removeBtn.addEventListener('click', function() {
            myLibrary.splice(i, 1)
            displayBooks();
        })

        const toggleRead = document.createElement('button')
        book.read ? toggleRead.textContent = "Mark Unread" : toggleRead.textContent = "Mark Read"
        toggleRead.addEventListener('click', function() {
            book.read = !book.read
            displayBooks();
        })


        bookCard.appendChild(titleText)
        bookCard.appendChild(authorText)
        bookCard.appendChild(pagesText)
        bookCard.appendChild(readText)
        bookCard.appendChild(removeBtn)
        bookCard.appendChild(toggleRead)

        displayLibrary.appendChild(bookCard)

        bookCard.classList.add('book-card')
    }

}

const addButton = document.getElementById('addBtn')

addButton.addEventListener('click', function() {
    event.preventDefault();

    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked

    addBookToLibrary(title, author, pages, read)
})