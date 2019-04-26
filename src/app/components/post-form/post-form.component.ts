import { Component, OnInit, Input } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent implements OnInit {

  rForm: FormGroup;
  @Input() action = 'create';

  @Input() post: Post;


  constructor(private router: Router, private postService: PostService, private fb: FormBuilder) {
    this.rForm = fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

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
