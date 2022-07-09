import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteServices/note.service';






@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title:any;
  description:any;
  colour: any;
  noteId: any;

  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,private note: NoteService,
    
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
   
  }
  ngOnInit(): void {
    console.log(this.data);
    this.title=this.data.title;
    this.description=this.data.description;
    this.colour=this.data.colour;
    this.noteId=this.data.noteId;
  }

  onNoClick(): void {
    console.log(this.title,this.description)
    let data = {
      title: this.title,
      description: this.description,
      colour:this.colour,
    };
    this.note.updatenote(data,this.noteId).subscribe((Response:any)=>{
      console.log(Response);
      });

    this.dialogRef.close();
  }
}
