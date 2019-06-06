import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '~/app/shared/models/user';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private readonly CHECK_USER_ACCOUNT = '/accounts/email';
    private readonly REGISTER_USER = '/accounts/register';

    constructor(private http: HttpClient) {}

    public checkUser(email: string): Observable<any> {
        return this.http.post<any>(this.CHECK_USER_ACCOUNT, new HttpParams().append('email', email));
    }
    public createUser(u: User): Observable<any> {
        return this.http.post<any>(this.REGISTER_USER, new HttpParams().append('email', u.email)
            .append('password', u.password)
            .append('fullName', u.fullName));
    }
}
