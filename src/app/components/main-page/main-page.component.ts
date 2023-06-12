import { Component, Input } from '@angular/core';
import { IImages } from 'src/app/models/image';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @Input() image: IImages
}
