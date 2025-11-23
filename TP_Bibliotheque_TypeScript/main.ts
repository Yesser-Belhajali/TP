import { Library } from "./services/Library.js";
import { Repository } from "./services/Repository.js";
import { Book } from "./models/Book.js";
import { fetchBooks } from "./utils/api.js";

async function main() {
  const booksRepo = new Repository<Book>();
  const library = new Library(booksRepo);

  const books = await fetchBooks();
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