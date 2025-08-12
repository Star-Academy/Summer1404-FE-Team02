const bookGrid = document.querySelector(".book-grid");

const getBooks = async () => {
    const res = await fetch("./books.json");

    if (!res.ok) {
        throw new Error(`Failed to fetch books: ${res.statusText}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
        throw new Error("Invalid books data");
    }
    console.log(data)
    return data;
};

const createMarkupFromBook = (book) => {
    const formattedDate = new Date(book.publishData).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const genres = book.genre.map((g) => `<span>${g}</span>`).join("");

    return `
         <article class="book-article">
           <div class="book-wrapper">
             <div class="book-img-wrapper">
               <img
                 class="book-img"
                 src="https://picsum.photos/200/300"
                 alt="${book.name}"
                 loading="lazy"
                 width="200"
                 height="300"
               />
             </div>
             <div class="book-content">
               <h3 class="book-title">${book.name}</h3>
               <p class="book-author">by ${book.author}</p>
               <p class="book-genre">${genres}</p>
               <p class="book-publish">
                 Published: <time datetime="${book.publishData}">${formattedDate}</time>
               </p>
               <p class="book-price"><span>$</span>${book.price}</p>
             </div>
           </div>
         </article>
       `;
};

const createSection = ((tag, text) => {
    const el = document.createElement(tag);
    el.textContent = text;
    return el;
});

const main = async () => {
    try {
        const books = await getBooks();

        bookGrid.appendChild(createSection("header", "header"));

        books.forEach((book) => {
            bookGrid.insertAdjacentHTML("beforeend", createMarkupFromBook(book));
        });

        bookGrid.appendChild(createSection("footer", "footer"));
    } catch (error) {
        console.error(error);
    }
};

main();