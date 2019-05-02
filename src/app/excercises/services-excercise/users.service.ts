import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    activeUsers = ['Julianne', 'John', 'Jane'];
    inactiveUsers = ['Mary', 'Luke', 'Anakin'];

    constructor(public counter: CounterService) { }

    activate(user: string) {
        this.inactiveUsers.splice(
            this.inactiveUsers.indexOf(user), 1
        );
        this.activeUsers.push(user);
        this.counter.up();
    }

    deactivate(user: string) {
        this.activeUsers.splice(
            this.activeUsers.indexOf(user), 1
        );
        this.inactiveUsers.push(user);
        this.counter.up();
    }

}
