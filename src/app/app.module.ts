import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { PassDataInEventComponent } from './pass-data-in-event/pass-data-in-event.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { InputOutputComponent } from './input-output/input-output.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NestedOberableComponent } from './nested-oberable/nested-oberable.component';
import {AuthGaurd} from '../app/gaurds/auth-gaurd';
import { ApiService } from './api.service';
import { AnonGaurd } from "../app/gaurds/anon-gaurd";
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from './alert.service';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerificationComponent } from './verification/verification.component';
@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    PassDataInEventComponent,
    TwoWayBindingComponent,
    InputOutputComponent,
    HomeComponent,
    LoginComponent,
    NestedOberableComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService, AlertService, AuthGaurd, AnonGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
