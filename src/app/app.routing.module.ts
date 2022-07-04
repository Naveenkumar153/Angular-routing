import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guard/app.guard';
import { CanDeactieGuard } from './servers/edit-server/edit-server-candeactive.service';

const routes: Routes = [
    { path:'', component:HomeComponent},
    // { path:'', redirectTo:'',pathMatch:'full' },
    { path:'users', component:UsersComponent,children:[
      { path:':id/:name',component:UserComponent },
    ]},
    { path:'servers',
      // canActivate:[AuthGuard],
      canActivateChild:[AuthGuard],
      component:ServersComponent,
      children:[
       
      { path:':id', component:ServerComponent, },
      { path:':id/edit', component:EditServerComponent,canDeactivate:[CanDeactieGuard]},
    ]},
    { path:'**',component:PageNotFoundComponent },
]

@NgModule({
    declarations:[
        HomeComponent,
        UsersComponent,
        ServersComponent,
        UserComponent,
        EditServerComponent,
        ServerComponent,
        PageNotFoundComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]

})

export class AppRouting{

}