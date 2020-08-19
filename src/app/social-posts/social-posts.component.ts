import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Grand Circus',
      thought: 'Grand Circus is Cool.',
    },
    {
      title: 'Ritual',
      thought: 'Ritual is a well developed app.',
    },
    {
      title: 'Scott',
      thought: 'Scott rides scooters.',
    },
  ];

  showForm: boolean = false;

  constructor() {}

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  onAdd(post: Post) {
    this.posts.unshift(post);
    this.toggleForm();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {}
}
