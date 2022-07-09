import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteServices/note.service';
import { ArchieveComponent } from '../archieve/archieve.component';
import { TrashNoteComponent } from '../trash-note/trash-note.component';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteObject:any
  

  notelistId: any;
  noteId: any;
  isDeleted:boolean=false;
  isArchieve:boolean=false;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    let del
    if(del=TrashNoteComponent){
      this.isDeleted = true;
      console.log(this.isDeleted)
    }
    let archieve
    if(archieve=ArchieveComponent){
      this.isArchieve=true;
    console.log(this.isArchieve);
    }
    
    this.isArchieve=true;
    console.log(this.isArchieve);
  }
  onDelete() {
    let Data = {
      
     
      isDeleted:true
      
    }
    console.log('deleted',Data);

    this.note.trashNoteService(Data,this.noteId).subscribe((response:any) => {
      console.log(response);
       
    })
  }
  onArchive(){
    let Data = {
      // noteId:[this.noteObject._id],
      isArchived:true
    }
    console.log('Archived',Data);

    this.note.archieveNoteService(Data,this.noteId).subscribe((response:any) =>{
      console.log(response);
     
      
    })
  }
}
  
  

