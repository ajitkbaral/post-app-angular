import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  component = 'post-page';

  // @Output() getPost: EventEmitter<any> = new EventEmitter();

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService, private authService: AuthenticationService) { }

  ngOnInit() {

    if (this.authService.isLoggedIn()) {
      const idParam = this.route.snapshot.paramMap.get('id');
      this.postService.getPost(idParam).subscribe(d => {
      this.post = d.data;
      });
    } else {
      this.authService.redirectToLoginPage();
    }

  }

}
