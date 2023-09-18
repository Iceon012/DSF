import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentApprovalComponent } from './student-approval/student-approval.component';
import { ProofOfPaymentComponent } from './proof-of-payment/proof-of-payment.component';
import { AttachmentComponent } from './attachment/attachment.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    LoginComponent,
    HomeComponent,
    StudentApprovalComponent,
    ProofOfPaymentComponent,
    AttachmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
