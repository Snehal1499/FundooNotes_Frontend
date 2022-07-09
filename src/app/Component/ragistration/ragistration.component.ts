import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.scss']
})
export class RagistrationComponent implements OnInit {
  ragistrationForm!: FormGroup;
  submitted = false;
  hide:boolean = true;
  

  constructor(private formBuilder: FormBuilder,private user: UserService) { }

  ngOnInit(): void {
    this.ragistrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  OnSubmit() {
    console.log(this.ragistrationForm.value);
    if(this.ragistrationForm.valid){
      console.log("Do api call",this.ragistrationForm);
      let data={
        firstName:this.ragistrationForm.value.firstName,
        lastName:this.ragistrationForm.value.lastName,
        email:this.ragistrationForm.value.email,
        password:this.ragistrationForm.value.password,
        address:"Amalner"
      }
      this.user.ragistration(data).subscribe((response:any)=>{
        console.log(response);
      })
    }else{
      console.log("invalid data",this.ragistrationForm.value);
    }

}
ShowPassword(){
  this.hide = !this.hide;  

}
}
