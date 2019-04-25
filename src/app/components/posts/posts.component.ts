import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { DataService } from 'src/app/services/data.service';
import { PostService } from 'src/app/services/post.service';
import { HttpClient } from '@angular/common/http';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  filteredPosts: Post[];


  constructor(private dataService: DataService, private postService: PostService, private tokenService: AngularTokenService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(d => {
      this.posts = d.data;
      this.filteredPosts = this.posts;
    });



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
