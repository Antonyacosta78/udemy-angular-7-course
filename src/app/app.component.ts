import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3{
  //     color: #ff0000;
  //     background-color:green;
  //   }
  //   `]

})
export class AppComponent {
  name = "John Doe"

  test(args){
    console.log(args)
  }

}
