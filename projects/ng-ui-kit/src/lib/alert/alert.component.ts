import { Component, ChangeDetectionStrategy, Input, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
    @ViewChild('alert') alert!: ElementRef;
    @Input() level?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' = 'primary';
    @Input() content!: string;
    @Input() footer?: string;
    @Input() title?: string;
    @Input() dismissable?: boolean;

    constructor(private renderer: Renderer2) {}

    public dismiss(): void {
        this.renderer.addClass(this.alert.nativeElement, 'c-alert--dismissed');
    }
}
