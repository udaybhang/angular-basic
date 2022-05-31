import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './+state/one/a.component';
import { AbcComponent } from './abc/abc.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AnonGaurd } from './gaurds/anon-gaurd';
import { AuthGaurd } from './gaurds/auth-gaurd';
import { HomeComponent } from './home/home.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { LoginComponent } from './login/login.component';
import { NestedOberableComponent } from './nested-oberable/nested-oberable.component';
import { PassDataInEventComponent } from './pass-data-in-event/pass-data-in-event.component';
import { RegisterComponent } from './register/register.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [{path: '', canActivate: [AnonGaurd], children: [
  { path: '', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'sign-up', component: RegisterComponent}
]},
{path: '', canActivate: [AuthGaurd], children: [{
  path: 'verify', component: VerificationComponent
}] },
{path: 'dec', children: [{
  path: '', component: AComponent
}] },
{path: 'k', children: [{
  path: 'event-binding', component: AbcComponent
},
{path: 'nested-oberable', component: NestedOberableComponent},
{path: 'pass-data-using-event', component: PassDataInEventComponent},
{path: 'two-way', component: TwoWayBindingComponent}]},
{path: 'home', component: HomeComponent, children:[{
  path: '', component: InputOutputComponent
}] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
