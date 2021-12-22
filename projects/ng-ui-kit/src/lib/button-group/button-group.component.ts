import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent {
    @Input() dir: 'right' | 'left' = 'left';
}
