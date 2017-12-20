import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';
import { AppUtils } from './app-uitls';
@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  apiGet(service: string, requestParams?: Map<string, string>): any {
    let params = '';
    if (AppUtils.isDefined(requestParams)) {
        requestParams.forEach((value: string, key: string) => {
            if (AppUtils.stringHasValue(key) && AppUtils.stringHasValue(value)) {
                if (AppUtils.stringHasValue(params)) {
                    params += '&';
                }
                params += key + '=' + value;
            } else {
                console.warn('Invalid GET URL request param map entry <' + key + ', ' + value + '> ');
            }
        });
    }

    let finalUrl = environment.baseUrl + service ;
    if (AppUtils.stringHasValue(params)) {
      finalUrl += '?' + params;
  }
  return this.http.get(finalUrl)
  }
}
