import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NetlifyService {
  constructor(private http: HttpClient) {}

  postForm = (name: string, email: string, isInterestedInSpeaking: boolean) => {
    const encodedBody = this.encode({
      'form-name': 'sign-up',
      name,
      email,
      isInterestedInSpeaking
    });
    return this.http
      .post('https://stupefied-bohr-e57e0f.netlify.com/', encodedBody, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text'
      })
      .subscribe(res => this.handleSuccess(), err => this.handleError());
  }

  private encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  private handleSuccess = () => {
    Swal(
      'Success!',
      'Your submission has been received. We will send you an email when our meetup goes live. Thank you for your interest!',
      'success'
    );
  }

  private handleError = () => {
    Swal(
      'Error!',
      'There was a problem submitting your information. Please try again later.',
      'error'
    );
  }
}
