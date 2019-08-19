import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BlocksComponent } from './Components/blocks/blocks.component';
import { CarouselComponent } from '../UiComponents/carousel/carousel.component';
import { FillPipe } from './Components/comment/fill.pipe';
import { CarouselItemDirective } from '../UiComponents/carousel/carousel-item.directive';
import { CarouselElementDirective } from '../UiComponents/carousel/carousel-element.directive';
import { CommentComponent } from './Components/comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CarouselComponent, 
    FillPipe, 
    CarouselComponent, 
    CarouselItemDirective,
    CarouselElementDirective,
    BlocksComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
