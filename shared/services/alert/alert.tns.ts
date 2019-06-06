import {Injectable} from '@angular/core';

@Injectable()
export class AlertService {
    public alert(message: string) {
        return alert({
            title: 'Hello Đại ca',
            okButtonText: 'OK',
            message: message
        });
    }
}
