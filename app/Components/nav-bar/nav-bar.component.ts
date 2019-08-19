import { Component, OnInit } from '@angular/core';
import { STATUS } from '../../../mocks/status';
import { LEVELS } from '../../../mocks/levels';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  listStatus = STATUS;
  listLevels = LEVELS;
  
  constructor() { }

  ngOnInit() {
  }

}
