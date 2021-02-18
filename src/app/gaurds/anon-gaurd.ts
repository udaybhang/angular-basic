import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthUtil } from "../../app/utility/auth-util";
import {filter, map} from 'rxjs/operators';
// import {AuthRepository} from '../repository/auth-repository';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class AnonGaurd implements CanActivate {
  constructor(private router: Router,
            //   private authRepo: AuthRepository, 
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const isLoggedIn = isPlatformBrowser(this.platformId) ? !AuthUtil.getAuthToken() : true;
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['verify']);
    }
    // else {
    //   const user$ = this.authRepo.fetchMe();
    //   return user$.pipe(filter(data => !!data), map(data => {
    //     if (!data.verified) {
    //       this.router.navigate(['verify']);
    //     } else if (data.onboarding !== 200) {
    //       this.router.navigate(['on-boarding']);
    //     } else {
    //       this.router.navigate(['dashboard', 'resume']);
    //     }
    //   }));
    // }
  }

}
