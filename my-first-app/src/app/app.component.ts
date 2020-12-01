import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
servers=[];


OnAddServer() {  
    this.servers.push('Another Server Added');  
  }  
  
  onRemoveServer(id: number) {  
    const position = id + 1;  
    this.servers.splice(position, 1);  
  }  
}
