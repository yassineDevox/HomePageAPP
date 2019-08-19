import { Component, Input } from '@angular/core';
import { Comment } from '../../../model/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent  {

  nbEmptyStars:number = 0;

  @Input()
  comment:Comment;

  constructor() { }

  getCommentStars(){
    if(this.comment.nbStars < 5){
      this.nbEmptyStars = 5 - this.comment.nbStars;
    }
    return this.comment.nbStars;
  }

  getItByGender(): string {
    return this.comment.gender === "f" ? "Voyageuse":"Voyageur";
  }


}