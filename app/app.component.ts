import { Component } from '@angular/core';
import {Comment} from '../model/comment.model';
import { COMMENTS } from '../mocks/comments.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  comments:Array<Comment> = COMMENTS;
  constructor(){}

  
}
