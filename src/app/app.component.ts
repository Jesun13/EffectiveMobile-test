import { Component } from '@angular/core';
import { IImages } from './models/image';
import { images as data} from './data/imegaes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  images: IImages[] = data
}
