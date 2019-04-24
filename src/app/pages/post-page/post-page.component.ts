import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  component = 'post-page';

  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log('i am here');
  }

}
