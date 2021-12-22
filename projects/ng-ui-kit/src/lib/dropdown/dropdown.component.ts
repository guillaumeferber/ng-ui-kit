import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DropDownOrientation } from './dropdown-orientation.enum';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements AfterViewInit {
    @Input() orientation: DropDownOrientation = DropDownOrientation.COLUMN;
    @Input() open: Observable<boolean> = new Observable();
    @ViewChild('checkbox') checkbox: ElementRef = new ElementRef(null);
    @ViewChild('label') label: ElementRef = new ElementRef(null);

    constructor(private renderer: Renderer2) { }

    ngAfterViewInit(): void {
        this.open.subscribe((value: boolean) => this.checkbox.nativeElement.checked = value);
        const pseudoGuid = this.generatePseudoGuid();
        this.setAttribute(this.checkbox, 'id', pseudoGuid);
        this.setAttribute(this.label, 'for', pseudoGuid);
    }

    private setAttribute(element: ElementRef, name: string, value: string): void {
        this.renderer.setAttribute(element.nativeElement, name, value);
    }

    private generatePseudoGuid(): string {
        return 'dropdown_' + Math.random().toString(36).substr(2, 9);
    }
}
