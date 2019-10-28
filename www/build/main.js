webpackJsonp([84],{

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mdawson/IonicProjects/angular-ionic-jupyter/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n  <ion-grid>\n    <ion-row class="nav">\n      <ion-col>ABOUT\n        <!--a [routerLink]="[\'/about\']">ABOUT</a-->\n      </ion-col>\n      |\n      <ion-col>MUSIC\n        <!--a [routerLink]="[\'/solutions\']">SOLUTIONS</a-->\n      </ion-col>\n      |\n      <!--ng-template #anonymousUser>\n        <ion-col>\n          <a class="nav-link" routerLink="/login"><i class="far fa-user-circle"></i></a>\n        </ion-col>\n      </ng-template-->\n      <!--ion-col *ngIf="adminService.user$ | async as user; else anonymousUser">{{ user.displayName }} |\n          <a [routerLink]="[\'/log-out\']">LOG OUT</a>\n      </ion-col-->\n\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-card class="jumboTron"></ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/mdawson/IonicProjects/angular-ionic-jupyter/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    var ListPage_1;
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/mdawson/IonicProjects/angular-ionic-jupyter/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/mdawson/IonicProjects/angular-ionic-jupyter/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(390);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_layout_module__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { LayoutModule } from './layout/layout.module';

// import {IonicModule} from "@ionic/angular";


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["g" /* RouterModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */], null),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({template:/*ion-inline-start:"/home/mdawson/IonicProjects/angular-ionic-jupyter/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/mdawson/IonicProjects/angular-ionic-jupyter/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_angular__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_angular__["a" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], LayoutModule);
    return LayoutModule;
}());

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { SiteDataService } from '../../../providers/site-data/site-data.service';
// import {AdminService} from '../../../providers/admin-service/admin-service';
// import {Observable} from 'rxjs';
// import * as firebase from 'firebase';
var HeaderComponent = /** @class */ (function () {
    // isLoggedIn = true;
    // appName = this.siteData.siteName;
    // tagLine = this.siteData.siteTagLine;
    // user$: Observable<firebase.User>;
    function HeaderComponent( // private siteData: SiteDataService,
    // private adminService: AdminService
    ) {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header',template:/*ion-inline-start:"/home/mdawson/IonicProjects/angular-ionic-jupyter/src/app/layout/header/header.component.html"*/'<ion-toolbar>\n\n    <ion-buttons slot="start">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title class="title__link">\n        <a [routerLink]="[\'/home\']">\n            <ion-item lines="none">\n                Jupyter Music\n            </ion-item>\n            <div class="tag-line">\n                Outter Galaxy Entertain\n            </div>\n        </a>\n    </ion-title>\n\n    <ion-grid>\n        <ion-row class="nav">\n            <ion-col>\n                <a [routerLink]="[\'/about\']">ABOUT</a>\n            </ion-col>\n            |\n            <ion-col>\n                <a [routerLink]="[\'/solutions\']">SOLUTIONS</a>\n            </ion-col>\n            |\n            <ng-template #anonymousUser>\n                <ion-col>\n                    <a class="nav-link" routerLink="/login"><i class="far fa-user-circle"></i></a>\n                </ion-col>\n            </ng-template>\n            <!--ion-col *ngIf="adminService.user$ | async as user; else anonymousUser">{{ user.displayName }} |\n                <a [routerLink]="[\'/log-out\']">LOG OUT</a>\n            </ion-col-->\n\n        </ion-row>\n    </ion-grid>\n\n</ion-toolbar>\n\n'/*ion-inline-end:"/home/mdawson/IonicProjects/angular-ionic-jupyter/src/app/layout/header/header.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_site_data_site_data_service__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {AuthService} from '../../../providers/auth/auth.service';
var FooterComponent = /** @class */ (function () {
    function FooterComponent(siteData, 
    // public authService: AuthService,
    router) {
        this.siteData = siteData;
        this.router = router;
        this.siteName = this.siteData.siteName;
    }
    /*setMessage() {
      this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }*/
    FooterComponent.prototype.goToServicesPage = function () {
        this.router.navigate(['/services'])
            .then()
            .catch();
    };
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-footer',template:/*ion-inline-start:"/home/mdawson/IonicProjects/angular-ionic-jupyter/src/app/layout/footer/footer.component.html"*/'<!-- START FOOTER CONTAINER -->\n<ion-footer>\n    <ion-grid>\n        <ion-row class="footer__social-icons-wrapper">\n            <ion-col class="footer__social-icons-wrapper__box">\n                <a href="https://www.facebook.com/whoslaundry09" target="_blank">\n                    <ion-icon class="footer__social-icons-wrapper__box__icon" name="logo-facebook"></ion-icon>\n                </a>\n            </ion-col>\n            <ion-col class="footer__social-icons-wrapper__box">\n                <a href="https://www.instagram.com/whoslaundry09/" target="_blank">\n                    <ion-icon class="footer__social-icons-wrapper__box__icon" name="logo-instagram"></ion-icon>\n                </a>\n            </ion-col>\n            <ion-col class="footer__social-icons-wrapper__box">\n                <a href="https://www.linkedin.com/in/marvin-t-dawson-0b89a67/" target="_blank">\n                    <ion-icon class="footer__social-icons-wrapper__box__icon" name="logo-linkedin"></ion-icon>\n                </a>\n            </ion-col>\n\n            <ion-col class="footer__social-icons-wrapper__box">\n                <a href="https://twitter.com/whoslaundry09" target="_blank">\n                    <ion-icon class="footer__social-icons-wrapper__box__icon" name="logo-twitter"></ion-icon>\n                </a>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="footer__wrapper">\n            <ion-col>\n                <div class="footer__wrapper__nav-subdiv">\n                    <h2>Manage Anywhere</h2>\n                    <p class="footer__wrapper__nav-subdiv__contact-text">Stay Connected To Your Business</p>\n                    <button class="footer__wrapper__nav-subdiv__btn" (click)="goToServicesPage()">\n                        Learn More\n                    </button>\n                </div>\n            </ion-col>\n            <ion-col>\n                <div class="footer__wrapper__nav-subdiv">\n                    <h2>Quick Request</h2>\n                    <p class="footer__wrapper__nav-subdiv__contact-text">My Apartment Requires Service</p>\n                    <button class="footer__wrapper__nav-subdiv__btn"\n                            (click)="isUserLogin()">Request Service\n                    </button>\n                </div>\n            </ion-col>\n            <ion-col>\n                <div class="footer__wrapper__nav-subdiv">\n                    <h2>Got Questions?</h2>\n                    <p class="footer__wrapper__nav-subdiv__contact-text">Let us know how we can better serve you.</p>\n                    <button class="footer__wrapper__nav-subdiv__btn" (click)="getContactForm()">Contact\n                    </button>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <div class="footer__site-info">\n                <ion-col>\n                    <div class="footer__site-info__content">\n                        The {{ siteName }} is powered by Angular 7 / 8, TypeScript 2 & the Ionic 4 Framework. Hosting is provided by\n                        Google Firebase & Google Cloud Platform (GCP).\n                    </div>\n                </ion-col>\n            </div>\n        </ion-row>\n    </ion-grid>\n\n\n</ion-footer>\n'/*ion-inline-end:"/home/mdawson/IonicProjects/angular-ionic-jupyter/src/app/layout/footer/footer.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_site_data_site_data_service__["a" /* SiteDataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteDataService = /** @class */ (function () {
    function SiteDataService() {
        this.siteName = 'JUPYTER MUSIC';
        this.siteTagLine = 'Next Level Music';
        this.siteKeywords = 'Jupyter, Jupyter Music, Music, Hip Hop, Rap, Rap Music, Texas Rappers, Athens Texas, Athens, Texas, ' +
            'Texas Music, Ar\'Zavier Criner' +
            'Marvin Dawson, Dawson Technologies Consulting, Angular Developer';
        this.year = new Date().getFullYear();
        this.siteLogo = '../assets/shapes.svg';
    }
    SiteDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SiteDataService);
    return SiteDataService;
}());

//# sourceMappingURL=site-data.service.js.map

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		453,
		61
	],
	"./ion-action-sheet-ios.entry.js": [
		454,
		60
	],
	"./ion-action-sheet-md.entry.js": [
		455,
		59
	],
	"./ion-alert-ios.entry.js": [
		456,
		19
	],
	"./ion-alert-md.entry.js": [
		457,
		18
	],
	"./ion-app_8-ios.entry.js": [
		458,
		2
	],
	"./ion-app_8-md.entry.js": [
		459,
		1
	],
	"./ion-avatar_3-ios.entry.js": [
		460,
		58
	],
	"./ion-avatar_3-md.entry.js": [
		461,
		57
	],
	"./ion-back-button-ios.entry.js": [
		462,
		56
	],
	"./ion-back-button-md.entry.js": [
		463,
		55
	],
	"./ion-backdrop-ios.entry.js": [
		464,
		81
	],
	"./ion-backdrop-md.entry.js": [
		465,
		80
	],
	"./ion-button_2-ios.entry.js": [
		466,
		54
	],
	"./ion-button_2-md.entry.js": [
		467,
		53
	],
	"./ion-card_5-ios.entry.js": [
		468,
		52
	],
	"./ion-card_5-md.entry.js": [
		469,
		51
	],
	"./ion-checkbox-ios.entry.js": [
		470,
		50
	],
	"./ion-checkbox-md.entry.js": [
		471,
		49
	],
	"./ion-chip-ios.entry.js": [
		472,
		48
	],
	"./ion-chip-md.entry.js": [
		473,
		47
	],
	"./ion-col_3.entry.js": [
		474,
		79
	],
	"./ion-datetime_3-ios.entry.js": [
		475,
		23
	],
	"./ion-datetime_3-md.entry.js": [
		476,
		22
	],
	"./ion-fab_3-ios.entry.js": [
		477,
		46
	],
	"./ion-fab_3-md.entry.js": [
		478,
		45
	],
	"./ion-img.entry.js": [
		479,
		78
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		480,
		65
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		481,
		64
	],
	"./ion-input-ios.entry.js": [
		482,
		44
	],
	"./ion-input-md.entry.js": [
		483,
		43
	],
	"./ion-item-option_3-ios.entry.js": [
		484,
		42
	],
	"./ion-item-option_3-md.entry.js": [
		485,
		41
	],
	"./ion-item_8-ios.entry.js": [
		486,
		40
	],
	"./ion-item_8-md.entry.js": [
		487,
		39
	],
	"./ion-loading-ios.entry.js": [
		488,
		17
	],
	"./ion-loading-md.entry.js": [
		489,
		16
	],
	"./ion-menu_4-ios.entry.js": [
		490,
		25
	],
	"./ion-menu_4-md.entry.js": [
		491,
		24
	],
	"./ion-modal-ios.entry.js": [
		492,
		6
	],
	"./ion-modal-md.entry.js": [
		493,
		5
	],
	"./ion-nav_5.entry.js": [
		494,
		7
	],
	"./ion-popover-ios.entry.js": [
		495,
		4
	],
	"./ion-popover-md.entry.js": [
		496,
		3
	],
	"./ion-progress-bar-ios.entry.js": [
		497,
		38
	],
	"./ion-progress-bar-md.entry.js": [
		498,
		37
	],
	"./ion-radio_2-ios.entry.js": [
		499,
		11
	],
	"./ion-radio_2-md.entry.js": [
		500,
		10
	],
	"./ion-range-ios.entry.js": [
		501,
		36
	],
	"./ion-range-md.entry.js": [
		502,
		35
	],
	"./ion-refresher_2-ios.entry.js": [
		503,
		63
	],
	"./ion-refresher_2-md.entry.js": [
		504,
		62
	],
	"./ion-reorder_2-ios.entry.js": [
		505,
		67
	],
	"./ion-reorder_2-md.entry.js": [
		506,
		66
	],
	"./ion-ripple-effect.entry.js": [
		507,
		77
	],
	"./ion-route_4.entry.js": [
		508,
		34
	],
	"./ion-searchbar-ios.entry.js": [
		509,
		15
	],
	"./ion-searchbar-md.entry.js": [
		510,
		14
	],
	"./ion-segment_2-ios.entry.js": [
		511,
		33
	],
	"./ion-segment_2-md.entry.js": [
		512,
		32
	],
	"./ion-select_3-ios.entry.js": [
		513,
		9
	],
	"./ion-select_3-md.entry.js": [
		514,
		8
	],
	"./ion-slide_2-ios.entry.js": [
		515,
		76
	],
	"./ion-slide_2-md.entry.js": [
		516,
		75
	],
	"./ion-spinner.entry.js": [
		517,
		31
	],
	"./ion-split-pane-ios.entry.js": [
		518,
		74
	],
	"./ion-split-pane-md.entry.js": [
		519,
		73
	],
	"./ion-tab-bar_2-ios.entry.js": [
		520,
		30
	],
	"./ion-tab-bar_2-md.entry.js": [
		521,
		29
	],
	"./ion-tab_2.entry.js": [
		522,
		68
	],
	"./ion-text.entry.js": [
		523,
		28
	],
	"./ion-textarea-ios.entry.js": [
		524,
		27
	],
	"./ion-textarea-md.entry.js": [
		525,
		26
	],
	"./ion-toast-ios.entry.js": [
		526,
		13
	],
	"./ion-toast-md.entry.js": [
		527,
		12
	],
	"./ion-toggle-ios.entry.js": [
		528,
		21
	],
	"./ion-toggle-md.entry.js": [
		529,
		20
	],
	"./ion-virtual-scroll.entry.js": [
		530,
		72
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 449;
module.exports = webpackAsyncContext;

/***/ })

},[272]);
//# sourceMappingURL=main.js.map