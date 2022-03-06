import { Component, Input } from '@angular/core';
import { layoutService } from '../layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class layoutComponent {
  constructor(private layoutService: layoutService) {}

  page(page: number) {
    this.layoutService.loadedPage = page;
  }
}
