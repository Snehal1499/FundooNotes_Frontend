import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteServices/note.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  archiveList: any;

  constructor(public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit(): void {

  }
  getArchiveList() {
    this.noteService.getAllNote().subscribe((response: any) => {
      console.log(response.data);


    })




  }
}




