import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-orga',
  templateUrl: './editar-orga.component.html',
  styleUrls: ['./editar-orga.component.css']
})
export class EditarOrgaComponent implements OnInit{
  @HostBinding('class') clases = 'row';




  constructor( private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }


}
