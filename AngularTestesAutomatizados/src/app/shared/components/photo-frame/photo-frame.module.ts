import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFrameComponent } from './photo-frame.component';
import { LikeWidgetModule } from '../like-widget/like-widget.module';

@NgModule({
  imports: [
    CommonModule,
    LikeWidgetModule
  ],
  declarations: [PhotoFrameComponent],
  exports: [PhotoFrameComponent]
})
export class PhotoFrameModule { }
