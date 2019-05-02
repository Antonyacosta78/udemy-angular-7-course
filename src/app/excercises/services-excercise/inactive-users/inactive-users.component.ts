import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

    users: string[];

    constructor(public usrService: UsersService) { }

    ngOnInit() {
        this.users = this.usrService.inactiveUsers;

    }
    activate(user: string) {
        this.usrService.activate(user)
    }

}
