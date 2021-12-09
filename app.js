window.onload = () =>{
    const API_KEY = 'key=AIzaSyAnRoBi8YK-Gj4tnAcuVo-_xHpPAKXPMU0';
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    const IMG_URL = "http://books.google.com/books/content?id=";
    
    const searchBar =  document.getElementById('search');
    
    searchBar.addEventListener('keyup', (e) =>{
        const searchString = e.target.value;
        searchBook(searchString);
        console.log(e.target.value);
    })
    
    
    function searchBook(query){
        const url = BASE_URL + `${query}` + '&' + API_KEY;
    
        fetch(url)
        .then(res => res.json())
        .then(books => showBooks(books.items));
    }
    
    showBooks = books =>{
        const main = document.getElementById('book_container');
        main.innerHTML = "";
            books.forEach(book => {
                title = book.volumeInfo.title;
                author = book.volumeInfo.authors;
                description = book.volumeInfo.description;
                img = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
                category = book.volumeInfo.categories;
    
                const bookEl = document.createElement('div');
                bookEl.classList.add('book');
    
                bookEl.innerHTML = `
                <div class="book">
                    <img src="${img}">
            <div class="book_info">
                    <h3>${title}</h3>
                    <p>${author}</p>
                    <p>${category}</p>
            </div>
        </div>
                `
    
                main.appendChild(bookEl);
            });  
            }; 
}
