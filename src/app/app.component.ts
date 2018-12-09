import { Component } from '@angular/core';
import { Auth0serviceService } from './auth0service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ePresenty';
  constructor(public auth: Auth0serviceService) {
    auth.handleAuthentication();
  }
  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewSession();
    }
  }
}
