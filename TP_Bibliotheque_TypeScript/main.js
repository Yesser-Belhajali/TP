"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Library_js_1 = require("./services/Library.js");
const Repository_js_1 = require("./services/Repository.js");
const api_js_1 = require("./utils/api.js");
async function main() {
    const booksRepo = new Repository_js_1.Repository();
    const library = new Library_js_1.Library(booksRepo);
    const books = await (0, api_js_1.fetchBooks)();
    books.forEach(book => library.addBook(book));
    console.log("Tous les livres :");
    console.log(library.booksRepo.getAll());
    console.log("\nRecherche 'harry' :");
    console.log(library.searchByTitle("harry"));
    console.log("\nEmprunt du livre id=3 :");
    library.borrowBook(3);
    console.log(library.booksRepo.getById(3));
    console.log("\nRetour du livre id=3 :");
    library.returnBook(3);
    console.log(library.booksRepo.getById(3));
}
main();
//# sourceMappingURL=main.js.map