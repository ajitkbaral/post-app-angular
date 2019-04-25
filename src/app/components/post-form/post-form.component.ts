import { Component, OnInit, Input } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Title } from '@angular/platform-browser';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) { }

  @Input() action = 'create';

  @Input() post: Post;

  ngOnInit() {
    this.post = {
      id: 0,
      title: '',
      description: ''
    };
  }

  create() {
    this.postService.createPost(this.post.title, this.post.description).subscribe(d => {
      if (d.status === 'success') {
        this.router.navigate(['posts', d.data.id]);
      }
    });
  }

  update() {
    this.postService.updatePost(this.post).subscribe(d => {
      if (d.status === 'success') {
        this.router.navigate(['posts', d.data.id]);
      }
    });
  }


}
