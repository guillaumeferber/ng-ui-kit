import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFileComponent } from './input-file.component';
import { InputModule } from '../input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DragAndDropDirective } from '../directives/drag-and-drop.directive';

@NgModule({
    declarations: [
        InputFileComponent,
        DragAndDropDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputModule,
    ],
    exports: [
        InputFileComponent
    ]
})
export class InputFileModule { }
