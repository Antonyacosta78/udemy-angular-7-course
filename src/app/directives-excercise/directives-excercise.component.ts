import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directives-excercise',
    templateUrl: './directives-excercise.component.html',
    styleUrls: ['./directives-excercise.component.css']
})
export class DirectivesExcerciseComponent implements OnInit {

    show = false;
    btn = {
        colorClass: 'btn-success',
        title: 'Display details'
    };
    logs = [];

    constructor() { }

    logClick() {
        let d = new Date();
        let txt = (this.show) ? 'Hide at ' : 'Show at ';
        this.logs.push( txt + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() );
    }
    
    btnChange() {
        if (this.show) {
            this.show = false;
            this.btn = {
                colorClass: 'btn-success',
                title: 'Display details'
            };

        } else {
            this.show = true;
            this.btn = {
                colorClass: 'btn-danger',
                title: 'Hide that'
            }
        }
    }

    ngOnInit() {
    }

}
