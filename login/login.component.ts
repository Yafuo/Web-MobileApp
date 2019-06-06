import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from '~/app/shared/services/login';
import {User} from '~/app/shared/models/user';
import {AlertService} from '~/app/shared/services/alert/alert';
import {RouteService} from '~/app/shared/services/route/route';
import {ActionBarService} from '~/app/shared/services/action-bar/action-bar';
import {DataBinderService} from '~/app/shared/services/data-binder/data-binder';

@Component({
  providers: [AlertService, RouteService
    , ActionBarService, DataBinderService],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggingIn = true;
  isSignUp = false;
  user: User;
  processing = false;
  @ViewChild('fullName') fullName: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('confirmPassword') confirmPassword: ElementRef;
  constructor(private actionBarService: ActionBarService, private alertService: AlertService
              , private routeService: RouteService, private dataBinderService: DataBinderService
              , private loginService: LoginService) {
  }

  ngOnInit() {
    this.actionBarService.hideActionBar();
    this.user = {
      email: 'example@abc.xyz',
      password: 'qwerty',
      fullName: 'Chris Nguyen'
    };
  }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
    this.isSignUp = !this.isSignUp;
  }

  submit() {
    if (!this.dataBinderService.getContent(this.email) || !this.dataBinderService.getContent(this.password)) {
      this.alertService.alert('Please provide both an email address and password.');
      return;
    }

    this.processing = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    /*Call service here Sir.Phu*/
    this.loginService.checkUser(this.dataBinderService.getContent(this.email)).subscribe( rtnUser => {
      if (rtnUser) {
        if (rtnUser.password === this.password.nativeElement.value) {
          this.routeService.navigate('/home');
        } else {
          this.alertService.alert('Invalid password. Please try again!');
        }
      } else {
        this.alertService.alert('Unknown account. Please sign up first!');
      }
    });
  }

  register() {
    // if (this.password.nativeElement.value !== this.confirmPassword.nativeElement.value) {
    //   this.alertService.alert('Your passwords do not match.');
    //   return;
    // }
    // /*Call service here Sir.Phu*/
    // const user = {
    //   email: this.email.nativeElement.value,
    //   password: this.password.nativeElement.value,
    //   fullName: this.fullName.nativeElement.value
    // };
    // this.loginService.createUser(user).subscribe(r => {
    //   if (r) {
    //     this.alertService.alert('Create account successfully!');
    //   } else {
    //     this.alertService.alert('Sorry! Something went wrong. Please try again later.');
    //   }
    // });
  }

  focusPassword() {
    this.password.nativeElement.focus();
  }

  focusConfirmPassword() {
    if (!this.isLoggingIn) {
      this.confirmPassword.nativeElement.focus();
    }
  }

}
