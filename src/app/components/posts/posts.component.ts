import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { DataService } from 'src/app/services/data.service';
import { PostService } from 'src/app/services/post.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  filteredPosts: Post[];
  loading = true;
  noDataFound = false;


  constructor(private dataService: DataService, private postService: PostService, private authService: AuthenticationService) { }

  ngOnInit() {

    if (this.authService.isLoggedIn()) {
      this.postService.getPosts().subscribe(d => {
        this.posts = d.data;
        this.filteredPosts = this.posts;
        this.loading = false;
      },
      err => {
        console.log(err);
        this.loading = false;
        this.noDataFound = true;
      });

      this.dataService.currentSearch.subscribe(text => {
        if (text !== '') {
          this.searchPost(text);
        } else {
          this.filteredPosts = this.posts;
        }

      });
    } else {
      this.authService.redirectToLoginPage();
    }


  }

  searchPost(searchedText: string) {
    const regex = new RegExp(searchedText, 'i');
    this.filteredPosts = this.posts.filter(article => article.title.search(regex) !== -1);
  }

}
