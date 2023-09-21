import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentApprovalComponent } from './student-approval/student-approval.component';
import { ProofOfPaymentComponent } from './proof-of-payment/proof-of-payment.component';
import { ReportComponent } from './report/report.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { authGuard } from './authentication/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      { path: 'stud-approval', component: StudentApprovalComponent },
      { path: 'proof', component: ProofOfPaymentComponent },
      { path: 'attachment', component: AttachmentComponent },
      { path: 'report', component: ReportComponent },
      {
        path: '',
        redirectTo: 'stud-approval',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
