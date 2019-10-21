import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [
        IonicModule,
        RouterModule
    ],
    exports: [HeaderComponent, FooterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
