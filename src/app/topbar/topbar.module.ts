import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopbarComponent } from './topbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopbarComponent],
  exports: [TopbarComponent],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class TopbarModule {}
