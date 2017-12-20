import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Git } from './git';
@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss'],
   providers: [GitSearchService]
})
export class GitSearchComponent implements OnInit {

  // Declaration

  searchValue: string;
  searchResult: Array<Git> = [];
  isLoading: boolean;
  timeout = null;
  constructor(private gitSearchService: GitSearchService, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }
  onSearch(value: string) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(function () {
      if (value.length !== 0) {
    }
    }, 500);
    if (value.length !== 0) {
    this.makeSearch(value);
    }
  }

  makeSearch(searchKeyword: string) {
    this.searchResult = [];
    const getRep = new Map<string, string>([['q', searchKeyword]]);
    this.isLoading = true;
    this.gitSearchService.searchRep('/repositories', getRep).subscribe((outputData) => {
      this.searchResult = outputData;
      this.isLoading = false;
    }, (error) => {
      this.matSnackBar.open(error, 'OK', {
        duration: 5000
      });
      this.isLoading = false;
    });
  }
}
