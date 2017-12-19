import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss']
})
export class GitSearchComponent implements OnInit {

  // Declaration

 searchValue: string;

  constructor() { }

  ngOnInit() {
  }

}
