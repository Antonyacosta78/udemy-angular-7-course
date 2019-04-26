import { Component } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [
        {
            name: 'LAMP Server Blueprint',
            content: 'Server blueprint for LAMP servers (Linux, Apache2, MySQL, PHP7)',
            type: 'blueprint'
        }
    ];

    constructor() {
    }

    onReciveServer(data) {
        this.serverElements.push(data);
    }

    onDestroyFirst() {
        this.serverElements.splice(0, 1);
    }

}
