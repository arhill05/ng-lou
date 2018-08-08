import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetlifyService {

  constructor(private http: HttpClient) { }

  postForm = (action: string, name: string, email: string, isInterestedInSpeaking: boolean): Observable<any> => {
    return this.http.post(action, {name, email, isInterestedInSpeaking}.toString());
  }
}
