import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data/site-data.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../providers/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  siteName = this.siteData.siteName;
  message: string;
  constructor(private siteData: SiteDataService,
              public authService: AuthService,
              private router: Router) { }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  goToServicesPage() {
    this.router.navigate(['/services'])
        .then()
        .catch();
  }
  ngOnInit(): void {
  }

  /**
   * Check if user is logged in
   */
  isUserLogin() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/admin';

        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    });

  }

  goToRequestServicePage() {
    this.router.navigate(['/admin/customer/request-service'])
        .then()
        .catch();
  }

  getContactForm() {
    this.router.navigate(['/contact'])
        .then()
        .catch();
  }

}
