import { Component, ContentChildren, QueryList, ViewChildren, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CarouselElementDirective } from './carousel-element.directive';
import { CarouselItemDirective } from './carousel-item.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Component({
  selector: 'ui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  
  btn:boolean[]=[true,false,false];

  //list item one for retrieving the width of the slide item
  @ViewChildren(CarouselElementDirective,{ read:ElementRef } ) private carouselItemElement:QueryList<ElementRef>;
  @ContentChildren(CarouselItemDirective) private Items:QueryList<CarouselItemDirective>;
  //Item's width
  itemWidth:number;
  //wrapper's Style object to assign width to the wrapper-carousel programmaticaly
  wrapperCarouselStyle = {};
  //reference of the wrapper-carousel to applay animation to it 
  @ViewChild('carousel',{static:true}) private carouselWrapper:ElementRef;
  //animation player obj
  private player:AnimationPlayer;
  //animation's params 
  @Input() timing = '250ms ease-in';
  // index of currentSlide thats gona be showing  
  private currentSlideIndex = 0;
  
  constructor(private builder : AnimationBuilder) { }

  private buildAnimation( offset ) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }
  
  ngAfterViewInit(): void {

      this.itemWidth=this.carouselItemElement.first.nativeElement.getBoundingClientRect().width;
     console.log(this.carouselItemElement);
      this.wrapperCarouselStyle = {
        width:`${this.itemWidth}px`,
        
      }
  }

  makeBgColorOn(el): void{
    let id = el.attributes.id.nodeValue;
    this.btn[id]=true;
    this.btn.forEach(
      (element,index) => {
        if(id!=index)this.btn[index]=false;
      }
    );
  }

  AnimateTheCurrentSlider(index:number): void {
    const offset = index * this.itemWidth;
    const myAnimation : AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carouselWrapper.nativeElement);
    this.player.play();
  }

  onShow(el): void { 
    
    this.makeBgColorOn(el); 
    this.AnimateTheCurrentSlider(el.attributes.id.nodeValue);
  
  }

 
}
