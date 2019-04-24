import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() title;
  searchedText: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  search() {
    this.dataService.changeSearchedText(this.searchedText);
  }



}
