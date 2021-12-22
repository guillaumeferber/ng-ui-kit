import {
    Component,
    ChangeDetectionStrategy,
    SecurityContext,
    Input
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFileComponent {
    @Input() control!: FormControl;
    status = 'none';
    selectedFile$!: Observable<FileSnippet | null>;
    selectedFile = new BehaviorSubject<FileSnippet | null>(null);
    fileIcon = 'description';
    successMessage!: string;
    isDragging: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    failMessage!: string;
    acceptedTypes = ['xls', 'xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].map(
        (ext: string) => `.${ext}`
    ).join();

    uploadStatus = {
      PENDING: 1,
      SUCCESS: 2,
      ERROR: 3,
      NONE: 4,
      ASYNC: 5
    };
    constructor(private domSanitizer: DomSanitizer) {
        this.selectedFile$ = this.selectedFile.asObservable();
    }

    public draggedEnterHandler = (): void => {
        this.isDragging.next(true);
    };

    public dragEnterHandler = (): void => {
        this.isDragging.next(false);
    };

    public onFilesDropped(fileList: File[]): void {
        if ((fileList as File[]).length > 0) {
            this.processFile(fileList);
        }
    }

    public processFile(fileList: File[] | FileList | null): void {
        if (fileList === undefined) {
            return;
        }
        const file: File = (fileList as File[])[0];
        if (!this.acceptedTypes.includes(file.type)) {
            return;
        }
        if (!this.checkFileSize(file.size)) {
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', () => {
            const sanitizeData = this.domSanitizer.sanitize(
                SecurityContext.NONE,
                reader.result as string
            );
            const safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
                sanitizeData as string
            );
            const selectedFile = new FileSnippet(
                reader.result as string,
                safeUrl,
                file,
                file.type
            );
            this.control.setValue(selectedFile.src);
            this.selectedFile.next(selectedFile);
            selectedFile.updateStatus(this.uploadStatus.PENDING);
        });

        reader.readAsText(file);
        this.isDragging.next(false);
    }

    private checkFileSize = (size: number): boolean =>
        size <= 10485760;
}

export class FileSnippet {
    status = 1;
    constructor(
        public src: string,
        public safeurl: SafeUrl,
        public file: File,
        public type: string
    ) {}

    public updateStatus(newStatus: number): void {
        this.status = newStatus;
    }
}
