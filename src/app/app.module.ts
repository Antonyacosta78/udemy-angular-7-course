import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { DatabindingExerciseComponent } from './databinding-exercise/databinding-exercise.component';
import { DirectivesExcerciseComponent } from './directives-excercise/directives-excercise.component';
import { FormhandlerComponent } from './formhandler/formhandler.component';
import { ServerElementComponent } from './server-element/server-element.component';
// import { WarningAlertComponent } from './warning-alert/warning-alert.component';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingExerciseComponent,
    DirectivesExcerciseComponent,
    FormhandlerComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
