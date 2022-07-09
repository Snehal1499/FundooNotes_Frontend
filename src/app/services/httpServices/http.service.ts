import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private httpClient : HttpClient) { }
  
  postservices(url:string, data:any, token: boolean=true, httpOptions:any)
  {
    return this.httpClient.post(url,data,token && httpOptions)
  }

  putservices(url:string, data:any, token: boolean=false, httpOptions:any={})
  {
    return this.httpClient.put(url,data,token && httpOptions );
  }

  getService(url:string, token:boolean=true, httpOptions:any={} )
  {
    return this.httpClient.get(url,token && httpOptions)
  }

  deleteservices(url:string, token: boolean=false, httpOptions:any={})
  {
    return this.httpClient.delete(url,token&& httpOptions) 
  }
    
}
