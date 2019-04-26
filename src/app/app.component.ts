import { Component } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [];

    constructor() {
    }

    onReciveServer(data) {
        this.serverElements.push(data);
    }

}
