import { Component } from '@angular/core';
import { NetlifyService } from './services/netlify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string;
  email: string;
  isInterestedInSpeaking = false;
  constructor(private netlifyService: NetlifyService) {

  }
  scrollToSignUp = () => {
    const el = document.querySelector('#sign-up') as HTMLElement;
    el.scrollIntoView({ behavior: 'smooth' });
  }

  onFormSubmit = () => {
    this.netlifyService.postForm(this.name, this.email, this.isInterestedInSpeaking);
    return false;
  }
}
