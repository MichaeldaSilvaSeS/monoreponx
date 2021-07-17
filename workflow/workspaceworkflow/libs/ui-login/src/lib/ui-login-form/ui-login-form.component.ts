import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'workspaceworkflow-ui-login-form',
  templateUrl: './ui-login-form.component.html',
  styleUrls: ['./ui-login-form.component.css']
})
export class UiLoginFormComponent implements OnInit {
  @Input() rotaHome: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login($event) {
    this.router.navigateByUrl(this.rotaHome);
  }

}
