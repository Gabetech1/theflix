import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: any;
  constructor(private api: ApiService, private router: Router) {}

  login(form:any) {
    if (!(form.value.email && form.value.password)) {
      alert("Enter user details");
    } else {
      const data = {
        email: form.value.email,
        password: form.value.password,
      };

      // console.log (data)
      this.api.login(data).subscribe({
        next: data => this.handleResponse(data),
        error: error => this.handleError(error)
        }
      );

    }
  }

  handleResponse(data:any){
//   console.log(res)
      this.router.navigate(["/flix-admin/tracking_list"]);
      //  this.api.showAlert('success','login successful')
      this.form.reset();
  }

  handleError(error:any){
     //  console.log(err)
          this.api.showAlert("danger", "username or password is inccorect");
        this.form.reset();
  }
}
