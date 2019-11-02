import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gar-parc-auto',
  templateUrl: './parc-auto.component.html',
  styleUrls: ['./parc-auto.component.css']
})
export class ParcAutoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
