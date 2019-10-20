import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [
        IonicModule,
        RouterModule,
        CommonModule
    ],
    exports: [HeaderComponent, FooterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
