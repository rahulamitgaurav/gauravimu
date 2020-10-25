import { TestLogic } from './../../../shared/models/testlogic';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class TestlogicService {
  baseUrl = environment.baseUri;
  public HttpUploadOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  saveTestLogic(test: TestLogic): Observable<any> {
    //delete port.portMasterId;
    return this.http.post<TestLogic>(this.baseUrl + 'test-logic', JSON.stringify(test),
     this.HttpUploadOptions);
  }
}
