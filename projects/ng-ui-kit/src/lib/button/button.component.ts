import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() color: 'primary' | 'accent' | 'green' | 'warning' = 'accent';
    @Input() disabled = false;
    @Input() type: 'flat' | 'raised' | 'outlined' = 'flat';
    @Input() title!: string;
    @Input() pos: 'start' | 'center' | 'end' = 'start';
    @Output() clicked: EventEmitter<void> = new EventEmitter();

    public clickHandler = (): void => this.clicked.emit();
}
