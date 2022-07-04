import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactive } from './edit-server-candeactive.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactive {
  server: {id: number, name: string, status: string};
  serverName    = '';
  serverStatus  = '';
  allowEdit     = false;
  changedServer = false;
  constructor(
      private serversService: ServersService,
      private route: ActivatedRoute,
      private router:Router,
    ) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    let id = +this.route.snapshot.params['id']
    console.log(this.route.snapshot.fragment)
    this.route.params.subscribe(d => { console.log(d)})
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.route.queryParams.subscribe((params:Params) => {
      this.allowEdit = params['loadedserver'] === '1' ? true : false;
   });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, 
      {name: this.serverName, status: this.serverStatus});
    this.changedServer = true;
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changedServer){
      return confirm('Do you want to discard the changes now ?')
    }else{
      return true;
    }
    if(!this.allowEdit){
      return true;
    }
  }

}
