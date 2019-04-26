import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-formhandler',
    templateUrl: './formhandler.component.html',
    styleUrls: ['./formhandler.component.css']
})
export class FormhandlerComponent implements OnInit {

    @Output() serverExport = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }


    onAddServer({name, content}) {
        console.log(name);
        this.serverExport.emit({
            name,
            content,
            type: 'server'
        });
    }

    onAddServerBlueprint({name, content}) {
        this.serverExport.emit({
            name,
            content,
            type: 'blueprint'
        });
    }

}
