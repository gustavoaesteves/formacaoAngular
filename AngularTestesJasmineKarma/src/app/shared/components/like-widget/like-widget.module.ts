import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@NgModule({
  declarations: [LikeWidgetComponent],
  exports: [LikeWidgetComponent],
  imports: [
    CommonModule,
  ],
  providers: [UniqueIdService],
})
export class LikeWidgetModule { }
