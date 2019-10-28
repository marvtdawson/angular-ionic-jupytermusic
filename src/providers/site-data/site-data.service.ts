import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {
  siteName = 'JUPYTER MUSIC';
  siteTagLine = 'Next Level Music';
  siteKeywords = 'Jupyter, Jupyter Music, Music, Hip Hop, Rap, Rap Music, Texas Rappers, Athens Texas, Athens, Texas, ' +
      'Texas Music, Ar\'Zavier Criner' +
      'Marvin Dawson, Dawson Technologies Consulting, Angular Developer';
  year: number = new Date().getFullYear();
  siteLogo = '../assets/shapes.svg';

  constructor() { }
}
