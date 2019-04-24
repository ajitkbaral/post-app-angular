import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  filteredPosts: Post[];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.posts = [
      {
        id: 1,
        title: 'Post 1',
        description: 'This is the simple post 1'
      },
      {
        id: 2,
        title: 'Post 2',
        description: 'This is the simple post 2'
      }
    ];

    this.dataService.currentSearch.subscribe(text => {
      if (text !== '') {
        this.searchPost(text);
      } else {
        this.filteredPosts = this.posts;
      }

    });

  }

  searchPost(searchedText: string) {
    const regex = new RegExp(searchedText, 'i');
    this.filteredPosts = this.posts.filter(article => article.title.search(regex) !== -1);
  }

}
