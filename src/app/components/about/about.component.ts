import { Component, Input } from '@angular/core';
import { IImages } from 'src/app/models/image';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @Input() image: IImages
}
