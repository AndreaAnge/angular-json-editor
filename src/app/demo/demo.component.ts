import { Component, OnInit } from '@angular/core';
import sourceJson  from './json/source-object.json';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  sourceJson = sourceJson; 
  
  constructor() { }

  ngOnInit() {
  }
}
