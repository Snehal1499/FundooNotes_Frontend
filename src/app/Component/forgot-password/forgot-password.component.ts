import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
         
      email: ['', [Validators.required, Validators.email]],
      
      
  });
  }
  OnSubmit() {
    console.log(this.forgetPasswordForm.value);
    if(this.forgetPasswordForm.valid){
      console.log("do api call",this.forgetPasswordForm);
      let data={
        email:this.forgetPasswordForm.value.email
      }
      this.user.forgotpassword(data).subscribe((response:any)=>{
        console.log(response);
      })
    }else{
      console.log("invalid data",this.forgetPasswordForm.value);
    }
  }

}
