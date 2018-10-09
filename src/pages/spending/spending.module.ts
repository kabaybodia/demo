import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpendingPage } from './spending';

@NgModule({
  declarations: [
    SpendingPage,
  ],
  imports: [
    IonicPageModule.forChild(SpendingPage),
  ],
})
export class SpendingPageModule {}
