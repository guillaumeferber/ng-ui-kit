import { Component, Input } from '@angular/core';
import { Badge } from './badge.model';

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
    @Input() value!: string;
    @Input() type!: string;
    @Input() rounded = true;
    @Input() disabled?: boolean;
}
