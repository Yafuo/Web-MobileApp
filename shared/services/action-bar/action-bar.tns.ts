import {Page} from 'tns-core-modules/ui/page';
import {Injectable} from '@angular/core';

@Injectable()
export class ActionBarService {
    constructor(private page: Page) {}
    public showActionBar() {
        this.page.actionBarHidden = false;
    }
    public hideActionBar() {
        this.page.actionBarHidden = true;
    }
}
