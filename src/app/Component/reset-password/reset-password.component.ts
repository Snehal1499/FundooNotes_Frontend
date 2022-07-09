import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  submitted = false;
  hide = true;
  token: any;

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,private user:UserService) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  OnSubmit() {
    console.log(this.resetPasswordForm.value);
    if(this.resetPasswordForm.valid){
      console.log("Do api call",this.resetPasswordForm);
      let data={
        password:this.resetPasswordForm.value.password,
        confirmPassword:this.resetPasswordForm.value.confirmPassword,
      }
      this.user.resetpassword(data).subscribe((Response:any)=>{
        console.log(Response);
      })
    }else{
      console.log("invalid data",this.resetPasswordForm.value);
    }
  }
}


