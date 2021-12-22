import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {
    @Output() filesDropped: EventEmitter<File[]> = new EventEmitter();
    @Output() dragEnter: EventEmitter<any> = new EventEmitter();
    @Output() dragLeave: EventEmitter<void> = new EventEmitter();
    @HostBinding('class') public className = 'idle';

    @HostListener('dragover', ['$event']) public onDragOver(evt: Event) {
        evt.preventDefault();
        evt.stopPropagation();
        this.className = 'is-dragover';
        this.dragEnter.emit(evt);
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(evt: Event) {
        evt.preventDefault();
        evt.stopPropagation();
        this.className = 'idle';
        this.dragLeave.emit();
    }

    @HostListener('drop', ['$event']) public onDrop(evt: any) {
        evt.preventDefault();
        evt.stopPropagation();
        this.className = 'idle';
        const files = evt.dataTransfer.files;
        const VALID_FILES: Array<File> = files as File[];
        this.filesDropped.emit(VALID_FILES);
    }
}
