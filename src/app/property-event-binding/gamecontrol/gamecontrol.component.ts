import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-gamecontrol',
    templateUrl: './gamecontrol.component.html',
    styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

// tslint:disable-next-line: no-output-on-prefix
    @Output() onGameTick = new EventEmitter();
    currentNum: number;
    loop;

    constructor() {
        this.currentNum = Math.floor(Math.random() * 10);
    }

    start() {
        this.loop = setInterval( () => {
            this.onGameTick.emit(this.currentNum);
            this.currentNum++;
        }, 1000);
    }

    stop() {
        clearInterval(this.loop);
    }

    ngOnInit() {
    }

}
