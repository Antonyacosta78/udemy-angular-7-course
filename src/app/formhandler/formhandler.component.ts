import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-formhandler',
    templateUrl: './formhandler.component.html',
    styleUrls: ['./formhandler.component.css']
})
export class FormhandlerComponent implements OnInit {

    @Output() serverExport = new EventEmitter();
    newServerName = '';
    newServerContent = '';

    constructor() { }

    ngOnInit() {
    }


    onAddServer() {
        this.serverExport.emit({
            name: this.newServerName,
            content: this.newServerContent,
            type: 'server'
        });
    }

    onAddServerBlueprint() {
        this.serverExport.emit({
            name: this.newServerName,
            content: this.newServerContent,
            type: 'blueprint'
        });
    }

}
