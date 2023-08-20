import { Component } from '@angular/core';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  data = {
    to: '',
    subject: '',
    message: ''
  };

  constructor(private email:EmailService) { }

  doSubmitForm() {
    console.log(this.data);

    if(this.data.to == '' || this.data.subject == '' || this.data.message == '') {
      alert('All fields are required.');
      return false;
    }

    this.email.sendEmail(this.data).subscribe(
      response => {
        console.log(response);
        alert('Email sent successfully.');
        return true;
      },
      error => {
        console.log(error);
        alert('Something went wrong.');
        return false;
      }
    );
    return true;
  }
}
