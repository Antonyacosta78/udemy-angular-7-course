import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-property-event-binding',
    templateUrl: './property-event-binding.component.html',
    styleUrls: ['./property-event-binding.component.css']
})
export class PropertyEventBindingComponent implements OnInit {

    numbers = [];

    constructor() { }

    ngOnInit() {
    }

    addNumber(num) {
        console.log(num)
        this.numbers.push(num);
    }

}
