import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {
  siteName = 'JUPYTER MUSIC';
  siteTagLine = 'Next Level Music';
  siteKeywords = 'Jupyter, Jupyter Music, Music, Hip Hop, Rap, Rap Music, Texas Rappers, Athens Texas, Athens, Texas, ' +
      'Texas Music, ArZavier Criner' +
      'Web Developer, Webmaster, Full Stack, Developer, Software, Engineer, Software Engineer, ' +
      'Angular 2, Angular 4, Angular 5, Angular 6, Angular 7, Angular, Angular Developer' +
      'TypeScript, Ionic Framework, Javascript, PHP, MongoDb, ExpressJs, ReactJS, C#' +
      'NodeJS, AWS, Amazon Web Services, NoSQL, MySQL, Google Cloud, Firebase, Firestore, Freelance';
  year: number = new Date().getFullYear();
  siteLogo = '../assets/shapes.svg';

  constructor() { }
}
