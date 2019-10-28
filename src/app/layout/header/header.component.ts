import { Component, OnInit } from '@angular/core';
// import { SiteDataService } from '../../../providers/site-data/site-data.service';
// import {AdminService} from '../../../providers/admin-service/admin-service';
// import {Observable} from 'rxjs';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // isLoggedIn = true;
  // appName = this.siteData.siteName;
  // tagLine = this.siteData.siteTagLine;

  // user$: Observable<firebase.User>;

  constructor(// private siteData: SiteDataService,
              // private adminService: AdminService
            ) {}

  ngOnInit() {}
}
