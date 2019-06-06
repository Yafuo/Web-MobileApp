import {RouterExtensions} from 'nativescript-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class RouteService {
    constructor(private router: RouterExtensions) {}
    public navigate(url: string) {
        this.router.navigate([url]);
    }
}
