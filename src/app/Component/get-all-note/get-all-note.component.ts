import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {
  noteArray:any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){
    this.note.getAllNote().subscribe((response:any)=>{
      console.log(response)
      this.noteArray=response.data
    })

  }
}
