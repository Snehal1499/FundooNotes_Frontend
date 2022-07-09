import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Component/login/login.component';
import { RagistrationComponent } from './Component/ragistration/ragistration.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { GetAllNoteComponent } from './Component/get-all-note/get-all-note.component';
import { CreateNoteComponent } from './Component/create-note/create-note.component';
import { DisplayComponent } from './Component/display/display.component';
import { IconComponent } from './Component/icon/icon.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { UpdateNoteComponent } from './Component/update/update.component'
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ArchieveComponent } from './Component/archieve/archieve.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { TrashNoteComponent } from './Component/trash-note/trash-note.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RagistrationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    GetAllNoteComponent,
    CreateNoteComponent,
    DisplayComponent,
    IconComponent,
    UpdateNoteComponent,
    ArchieveComponent,
    TrashNoteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCheckboxModule,MatListModule,
    HttpClientModule,MatIconModule,
    MatSidenavModule,MatToolbarModule,MatDialogModule,
    FormsModule,MatButtonModule,
    MatCardModule,MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
