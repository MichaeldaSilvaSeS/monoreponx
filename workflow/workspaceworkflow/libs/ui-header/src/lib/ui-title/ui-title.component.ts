import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'workspaceworkflow-ui-title',
  templateUrl: './ui-title.component.html',
  styleUrls: ['./ui-title.component.css']
})
export class UiTitleComponent implements OnInit {
  @Input() title = "";

  @Output() voltaHome = new EventEmitter() ;

  constructor() { }

  ngOnInit(): void {
  }

  voltarHome(): void {
    console.log('tentar voltar'); 
    this.voltaHome.emit('voltar');
  }

}
