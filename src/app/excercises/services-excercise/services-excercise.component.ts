import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
    selector: 'app-services-excercise',
    templateUrl: './services-excercise.component.html',
    styleUrls: ['./services-excercise.component.css']
})
export class ServicesExcerciseComponent implements OnInit {

    constructor(public usersService: UsersService) { }

    ngOnInit() {
    }

}
