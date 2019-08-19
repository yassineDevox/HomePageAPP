import { Component, OnInit } from '@angular/core';
import { STATUS } from '../../../mocks/status';
import { LEVELS } from '../../../mocks/levels';
import { BLOCKS } from '../../../mocks/blocks';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  listStatus = STATUS;
  listLevels = LEVELS;
  showFilter:boolean=false;

  blocks=Array(BLOCKS,BLOCKS,BLOCKS);
  
  constructor() { 
    //console.log(this.blocks);
  }

  ngOnInit() {
  }

  onFIN(){ 
    console.log('in');
    this.showFilter=true;
 }
  
  onFOUT(){ this.showFilter=false; }

}
