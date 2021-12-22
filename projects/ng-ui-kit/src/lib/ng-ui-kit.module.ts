import { NgModule } from '@angular/core';
import { NgUiKitComponent } from './ng-ui-kit.component';
import {AlertModule} from './alert/alert.module';


@NgModule({
  declarations: [
    NgUiKitComponent
  ],
  imports: [
    AlertModule
  ],
  exports: [
    NgUiKitComponent
  ]
})
export class NgUiKitModule { }
