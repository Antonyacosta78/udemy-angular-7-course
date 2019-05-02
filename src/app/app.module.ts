import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { ExcercisesComponent } from './excercises/excercises.component';
import { ServicesExcerciseComponent } from './excercises/services-excercise/services-excercise.component';
import { ActiveUsersComponent } from './excercises/services-excercise/active-users/active-users.component';
import { InactiveUsersComponent } from './excercises/services-excercise/inactive-users/inactive-users.component';
import { UsersService } from './excercises/services-excercise/users.service';
import { CounterService } from './excercises/services-excercise/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ExcercisesComponent,
    ServicesExcerciseComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountsService, LoggingService, UsersService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
