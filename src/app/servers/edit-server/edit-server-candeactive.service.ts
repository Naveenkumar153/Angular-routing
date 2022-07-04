import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


export interface CanComponentDeactive{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactieGuard implements CanDeactivate<CanComponentDeactive>{
    canDeactivate(
        component: CanComponentDeactive, 
        currentRoute: ActivatedRouteSnapshot,
         currentState: RouterStateSnapshot,
          nextState?: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
        return component.canDeactivate();
    }
}