import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  formSubmit: boolean = false;

  constructor(private ngForm : FormsModule, private router : Router,
    private route: ActivatedRoute) {}

  onSubmit(form : any) {
    this.formSubmit = true;
    if (form.valid) {
      if (form.value.username == "admin" && form.value.password == "admin123") {
        console.log("welcome to application");
        this.router.navigate([""], {state: {loggedIn : true}});
      } else {
        form.reset();
        this.formSubmit = false;
      }
    }
  }
}

