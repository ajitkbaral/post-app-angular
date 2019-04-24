import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private searchedTextSource = new BehaviorSubject<string>('');

  currentSearch = this.searchedTextSource.asObservable();

  constructor() { }

  changeSearchedText(searchedText: string) {
    this.searchedTextSource.next(searchedText);
  }

}
