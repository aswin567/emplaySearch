import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
@Injectable()
export class GitSearchService {

  constructor(private appService: AppService) { }


  searchRep(uri, parmas): any {
    const url = '/search' + uri;
    return this.appService.apiGet(url, parmas).map(
      (res) => {
        const result = res;
        return result.items;
      });
  }
}
