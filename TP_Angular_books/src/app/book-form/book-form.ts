import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrls: ['./book-form.css']
})
export class BookFormComponent {
  @Input() categories: string[] = [];
  @Input() book: Book | null = null;
  @Output() submitBook = new EventEmitter<Book>();

  tempBook: Book = new Book();

  ngOnChanges() {
    this.tempBook = this.book ? { ...this.book } : new Book();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.submitBook.emit(this.tempBook);
    form.resetForm();
    this.tempBook = new Book();
  }
}
