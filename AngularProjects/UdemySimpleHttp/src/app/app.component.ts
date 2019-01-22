import { ServerServiceService } from './server-service.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private serverService: ServerServiceService) {}
  dataFromServer = this.serverService.getDataFromServer();  
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave() {
      this.serverService.storeServices(this.servers)
      .subscribe(
        (response) => console.log(response),
        (errors) => console.log(errors)
      );
  }
  onGet() {
    this.serverService.getService()
    .subscribe(
      (data: any[]) => {
       this.servers = data;
        console.log(data);
      },
      (errors) => console.log(errors)
    );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
