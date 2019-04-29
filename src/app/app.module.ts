import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { DatabindingExerciseComponent } from './databinding-exercise/databinding-exercise.component';
import { DirectivesExcerciseComponent } from './directives-excercise/directives-excercise.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { FormhandlerComponent } from './formhandler/formhandler.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { PropertyEventBindingComponent } from './property-event-binding/property-event-binding.component';
import { GamecontrolComponent } from './property-event-binding/gamecontrol/gamecontrol.component';
import { OddComponent } from './property-event-binding/odd/odd.component';
import { EvenComponent } from './property-event-binding/even/even.component';
// import { WarningAlertComponent } from './warning-alert/warning-alert.component';
// import { SuccessAlertComponent } from './success-alert/success-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    DatabindingExerciseComponent,
    DirectivesExcerciseComponent,
    FormhandlerComponent,
    ServerElementComponent,
    PropertyEventBindingComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
