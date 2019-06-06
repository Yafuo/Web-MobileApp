import {Page} from 'tns-core-modules/ui/page';

export class ActionBarHelper {
    private page: Page;
    public showActionBar() {
        this.page.actionBarHidden = false;
    }
    public hideActionBar() {
        this.page.actionBarHidden = true;
    }
}
