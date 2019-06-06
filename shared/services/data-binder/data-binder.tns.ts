import {ElementRef, Injectable} from '@angular/core';

@Injectable()
export class DataBinderService {
    constructor() {}
    public getContent(obj: ElementRef): string {
        return obj.nativeElement.text;
    }
}
