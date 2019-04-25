import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-update-page',
  templateUrl: './post-update-page.component.html',
  styleUrls: ['./post-update-page.component.scss']
})
export class PostUpdatePageComponent implements OnInit {

  action = 'update';

  post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPost('5').subscribe(d => {
      this.post = d.data;
    });
  }

}
