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
import { RouteAdminComponent } from './route-admin/route-admin.component';
import { LoginComponent } from './login/login.component';
import { NestedOberableComponent } from './nested-oberable/nested-oberable.component';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from './alert.service';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    PassDataInEventComponent,
    TwoWayBindingComponent,
    InputOutputComponent,
    HomeComponent,
    RouteAdminComponent,
    LoginComponent,
    NestedOberableComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
