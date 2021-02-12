import { Component, Input } from '@angular/core';
import { Properties } from './test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  @Input() inputObjt: Properties= {
    inputType: 'text',
    inputLabelContent: 'username',
    buttonClass: '',
  };

  constructor() { 
  }

  setDefaultProperties(){
    this.inputObjt = {
      inputType: 'text',
      inputLabelContent: 'username',
      buttonClass: '',
    }
  }
  
}
