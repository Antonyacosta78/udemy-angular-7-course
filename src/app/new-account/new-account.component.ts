import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
    @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

    constructor(private logService: LoggingService, private accService: AccountsService) {
        this.accService.statusUpdated.subscribe((status: string) => alert(`status re-set: ${status}`) );
    }

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accService.addAccount(accountName, accountStatus);
        // this.logService.logStatusChange(accountStatus);
    }

}
