import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-clear-button',
    templateUrl: './clear-button.component.html',
    styleUrls: ['./clear-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClearButtonComponent {
    @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

    clickedHandler = () => this.clicked.emit();
}
