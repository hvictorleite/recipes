import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.isLoading = true;
    const email: string = form.value.email;
    const password: string = form.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode)
      authObs = this.authService.login(email, password);
    else authObs = this.authService.signup(email, password);

    authObs.subscribe({
      next: resData => {
        console.log(resData);
        this.isLoading = false;
      },
      error: (errorMessage: string) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    });

    form.reset();
  }
}
