import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;

  @Input() component = 'post-item';

  constructor(private router: Router) { }

  ngOnInit() {
  }


  viewPost(id: number) {
    this.router.navigate(['posts', id]);
  }

  updatePost() {
    this.router.navigate(['posts', this.post.id, 'edit']);
  }

}
