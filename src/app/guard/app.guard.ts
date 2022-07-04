import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../app.auth.service";


@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
    constructor(private router:Router,private authService:AuthService) {
    }

    canActivate(router: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
       return this.authService.isAuthenticated().then((authenticated:boolean) => {
            if(authenticated){
                return true;
            }else{
                this.router.navigate(['/']);
            }
        })
    };
    canActivateChild(router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
          return  this.canActivate(router,state);
    }
}