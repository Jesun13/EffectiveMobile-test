import { Component, Input } from '@angular/core';
import { IImages } from 'src/app/models/image';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
    @Input() image: IImages
}
