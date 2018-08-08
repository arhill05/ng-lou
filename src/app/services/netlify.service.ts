import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetlifyService {
  constructor(private http: HttpClient) {}

  postForm = (
    name: string,
    email: string,
    isInterestedInSpeaking: boolean
  ): Observable<any> => {
    const encodedBody = this.encode({'form-name': 'sign-up', name, email, isInterestedInSpeaking});
    return this.http.post(
      '/',
      encodedBody,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
  }

  private encode = data => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
  }
}
