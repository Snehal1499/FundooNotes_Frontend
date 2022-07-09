import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchieveComponent } from './Component/archieve/archieve.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { GetAllNoteComponent } from './Component/get-all-note/get-all-note.component';
import { LoginComponent } from './Component/login/login.component';
import { RagistrationComponent } from './Component/ragistration/ragistration.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { TrashNoteComponent } from './Component/trash-note/trash-note.component';

const routes: Routes = [
  { path: 'ragistration', component: RagistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'forgetpassword', component: ForgotPasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'notes', component: GetAllNoteComponent },
      {path:'archieve',component:ArchieveComponent},
      {path:'trash',component:TrashNoteComponent}





    ]
  },










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
