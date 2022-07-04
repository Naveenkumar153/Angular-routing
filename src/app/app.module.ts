import { BrowserModule, } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRouting } from './app.routing.module';
import { ServersService } from './servers/servers.service';
import { AuthService } from './app.auth.service';
import { AuthGuard } from './guard/app.guard';
import { CanDeactieGuard } from './servers/edit-server/edit-server-candeactive.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    CommonModule,
  ],
  providers: [ServersService,AuthService,AuthGuard,CanDeactieGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
