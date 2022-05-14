import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() message: string = "Example message";
  
  @Output() headerClick = new EventEmitter();

  onClick(){
    this.headerClick.emit()
  }

  constructor() { }

  text: string = "Header Component"

  ngOnInit(): void {
  }

}
