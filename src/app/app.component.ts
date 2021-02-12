import { Component } from '@angular/core';
import { Properties } from './components/test/test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  inputObj: Properties= {
    inputType: 'password',
    buttonClass:'p-button-danger',
    inputLabelContent: 'Contraseña'
  }
}
