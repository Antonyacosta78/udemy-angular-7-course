import { Component } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [];
    newServerName = '';
    newServerContent = '';

    constructor() {
    }

    onAddServer() {
        this.serverElements.push({
            name: this.newServerName,
            content: this.newServerContent,
            type: 'server'
        });
    }

    onAddServerBlueprint() {
        this.serverElements.push({
            name: this.newServerName,
            content: this.newServerContent,
            type: 'blueprint'
        });
    }
}
