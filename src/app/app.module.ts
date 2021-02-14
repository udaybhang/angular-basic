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

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    PassDataInEventComponent,
    TwoWayBindingComponent,
    InputOutputComponent,
    HomeComponent,
    RouteAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
