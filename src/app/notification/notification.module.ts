import { ReadMoreComponent } from './../read-more/read-more.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { DateAgoPipe } from './pipe/date-ago.pipe';
import { ReadMoreDirective } from '../read-more/read-more.directive';



@NgModule({
  declarations: [NotificationComponent, DateAgoPipe, ReadMoreComponent, ReadMoreDirective],
  imports: [
    CommonModule
  ],
  exports: [NotificationComponent, ReadMoreComponent]
})
export class NotificationModule { }
