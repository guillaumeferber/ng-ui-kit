import { NgModule } from '@angular/core';
import { BadgeModule } from '../public-api';
import { NgUiKitComponent } from './ng-ui-kit.component';

@NgModule({
  declarations: [
    NgUiKitComponent
  ],
  imports: [
    BadgeModule
  ],
  exports: [
    NgUiKitComponent
  ]
})
export class NgUiKitModule { }
