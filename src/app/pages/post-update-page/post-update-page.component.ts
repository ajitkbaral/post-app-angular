import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-update-page',
  templateUrl: './post-update-page.component.html',
  styleUrls: ['./post-update-page.component.scss']
})
export class PostUpdatePageComponent implements OnInit {

  action = 'update';

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
