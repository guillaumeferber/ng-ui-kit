import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, AfterContentInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements AfterContentInit {
    @ViewChild('input') input!: HTMLInputElement;
    @Input() control!: FormControl;
    @Input() type = 'text';
    @Input() name!: string;
    @Input() label = '';
    @Input() pattern!: string;
    @Output() focused: EventEmitter<unknown> = new EventEmitter();
    @Output() blurred: EventEmitter<unknown> = new EventEmitter();
    @Output() clicked: EventEmitter<unknown> = new EventEmitter();
    ngAfterContentInit(): void {
        this.control.statusChanges
            .pipe(filter(status => status === 'VALID'))
            .subscribe(() => this.input.focus());
    }

    public focusHandler = () => {
        this.focused.emit(this.control.value);
    };

    public blurredHandler = () => {
        this.blurred.emit(this.control.value);
    };

    public clickedHandler = () => {
        this.clicked.emit(this.control.value);
    };
}
