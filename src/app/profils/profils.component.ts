import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gar-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
