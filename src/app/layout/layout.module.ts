import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { rightSide } from './rightSide/rightSide.component';

@NgModule({
  declarations: [rightSide],
  imports: [CommonModule],
  exports: [rightSide],
})
export class layoutModule {}
