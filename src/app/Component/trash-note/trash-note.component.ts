import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
  trashList : any;

  constructor( private noteService: NoteService) { }

  ngOnInit(): void {
    this.getTrashList();
  }
  getTrashList(){
    this.noteService.getAllNote().subscribe((response: any) => {
      console.log(response.data);
       this.trashList=response.data
       
      })
    
  }
  
}
      
    


  





