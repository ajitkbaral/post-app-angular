import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;

  @Input() component = 'post-item';

  deleteClick = false;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
  }


  viewPost(id: number) {
    this.router.navigate(['posts', id]);
  }

  updatePost() {
    this.router.navigate(['posts', this.post.id, 'edit']);
  }



  deletePost() {
    this.postService.deletePost(this.post.id).subscribe(d => {
      if (d.status === 'success') {
        this.router.navigate(['posts']);
      }
    });
  }

  askBeforeDelete() {
    this.deleteClick = true;
  }

  dontDelete() {
    this.deleteClick = false;
  }


}
