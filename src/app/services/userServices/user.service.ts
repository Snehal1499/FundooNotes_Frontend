
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  constructor(private httpService: HttpService) {
  
  }

  //Register section
  ragistration(data: any) {
    console.log(data);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      }),
    };
    return this.httpService.postservices(
      `https://localhost:44338/User/Register`,
      data,
      false,
      header
    );
    }
    //login section
  login(data: any) {
    console.log(data);

    let header = {
      Headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      })
    };
    return this.httpService.postservices('https://localhost:44338/User/Login/snehalgpatil1415%40gmail.com/snehal%4012',

    data,
    false
    ,header);    
  }
  //ForgotPassword
  forgotpassword(data: any) {
    console.log(data);

    let header = {
      Headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      })
    };
    return this.httpService.postservices('https://localhost:44338/User/ForgetPassword/snehalgpatil1415%40gmail.com',
    data,
    false,
    header);    
  }
  //resetPassword
  resetpassword(data: any) {
    console.log(data);

    let header = {
      Headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      })
    };
    return this.httpService.postservices('https://localhost:44338/User/ResetPassword',
    data,
    false,
    header);    
  }
  
  }


