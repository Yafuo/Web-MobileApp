import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class RouteService {
    constructor(private router: Router) {}
    public navigate(url: string) {
        this.router.navigate([url]);
    }
}
