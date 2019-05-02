import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

    users: string[];

    constructor(public usrService: UsersService) { }

    ngOnInit() {
        this.users = this.usrService.activeUsers;

    }

    deactivate(user: string) {
        this.usrService.deactivate(user);
    }


}
