import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

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

    if (this.isLoginMode) {
      // ...
    }
    else {
      this.authService.signup(email, password)
        .subscribe({
          next: resData => {
            console.log(resData);
            this.isLoading = false;
          },
          error: (errorMessage: string) => {
            this.error = errorMessage;
            this.isLoading = false;
          }
        });
    }
    form.reset();
  }
}
