import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');



  }
  //create note
  createnote(data: any) {
    console.log(data, this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token

      }),
    };
    return this.httpService.postservices('https://localhost:44338/Note/AddNote', data, true, header)
  };
  //GetAllnote
  getAllNote() {

    console.log(" getnote service");
    let head = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      }),
    };
    return this.httpService.getService('https://localhost:44338/Note/GetallNote', true, head)
  }
  //updatenote
  updatenote(data: any,noteId:any) {
    console.log(data);

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json-patch+json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putservices( `https://localhost:44338/Note/UpdateNote/${noteId}`, data, true,header );
  }
   //delete note

   deleteNote(data: any) {
    console.log(data);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }),
      
    };
    
    return this.httpService.putservices( ``, data, true,header );
    
  }

  trashNoteService(Data:any,noteId:any) {
    console.log(Data,noteId);

    let headersOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })

    }
   
    return this.httpService.putservices(`https://localhost:44338/Note/TrashNote/1`,Data,true,headersOption)
  }

  //archieve note
  archieveNoteService(data: any,noteId:any) {
    console.log(data,noteId);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json-patch+json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.putservices( `https://localhost:44338/Note/ArchiveNote/${noteId}`, data, true,header );
  }


  
}