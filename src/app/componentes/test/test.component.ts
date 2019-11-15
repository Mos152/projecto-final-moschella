import {Pipe,Component, ViewChild, PipeTransform} from '@angular/core';
//import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements PipeTransform  {

  myDate = Date.now();
  constructor(){

  }
}
