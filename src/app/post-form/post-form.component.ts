import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() added = new EventEmitter<Post>();

  constructor() {}

  addPost(form: NgForm) {
    let newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.added.emit(newPost);
  }

  ngOnInit(): void {}
}
