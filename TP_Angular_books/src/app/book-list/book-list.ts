import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<number>();

  searchText = '';
  sortField: 'category' | 'isAvailable' | '' = '';

  get filteredBooks() {
    let filtered = this.books.filter(b =>
      b.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      b.author.toLowerCase().includes(this.searchText.toLowerCase())
    );

    if (this.sortField === 'category') filtered.sort((a,b)=> a.category.localeCompare(b.category));
    if (this.sortField === 'isAvailable') filtered.sort((a,b)=> Number(b.isAvailable)-Number(a.isAvailable));

    return filtered;
  }
}
