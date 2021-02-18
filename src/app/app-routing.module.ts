import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGaurd } from './gaurds/auth-gaurd';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NestedOberableComponent } from './nested-oberable/nested-oberable.component';
import { PassDataInEventComponent } from './pass-data-in-event/pass-data-in-event.component';
import { RegisterComponent } from './register/register.component';
import { RouteAdminComponent } from './route-admin/route-admin.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [

  {path: 'event-decorator', component: HomeComponent, children: [

    {path: 'two-way', component: TwoWayBindingComponent}

  ]},
  {path: '', component: RouteAdminComponent, children: [
    {path: '', component: PassDataInEventComponent},
    {path: 'event-binding', component: AbcComponent},
    {  path: 'log-in', component: LoginComponent  },
    { path: 'sign-up', component: RegisterComponent },
    {path: 'nested-oberable', component: NestedOberableComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'verify', component: VerificationComponent, canActivate:[AuthGaurd]}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
