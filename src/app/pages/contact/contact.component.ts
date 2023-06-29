import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public error = null;

  contactForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    message: new FormControl(),
  });

  constructor(private api: ApiService) {}

  ngOnInit() {}

  sendMessage() {
    // console.log(this.contactForm.value.username);
    var data = {
      full_name: this.contactForm.value.username,
      phone_number: this.contactForm.value.phone,
      email: this.contactForm.value.email,
      subject: "Filled Contact Form",
      message: this.contactForm.value.message,
      admin_email: "admin@flixshipping.com",
      site_name: "Flix Shipping",
      receiver_email: "info@flixshipping.com",
      receiver_name: "Flix Shipping",
    };
    this.api.sendMessage(data).subscribe({
      next: data => this.handleResponse(data),
      error: error => this.handleError(error)
      }
    );
  }

  handleResponse(data:any){
    if (data.error.text == "Email sent" || data.status == 200) {
      this.contactForm.reset();
      alert("Your message has been sent. We will get back to you soon.");
    } else {
      alert(
        "Message could not be sent. Please check your internet or try again later."
      );
    }
  }

  handleError(error:any){
    this.error = error.error.error;
    console.log("contact message ", error);
    alert(
      "Message could not be sent. Please check your internet or try again later."
    );
  }
}
