import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomTabsPage } from './custom-tabs';

@NgModule({
  declarations: [
    CustomTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomTabsPage),
  ],
})
export class CustomTabsPageModule {}
