import { Component, OnInit } from '@angular/core';
import { IImages } from '../../models/image';
import { images as data} from '../../data/imegaes';

@Component({
  selector: 'app-about-pages',
  templateUrl: './about-pages.component.html',
  styleUrls: ['./about-pages.component.scss']
})
export class AboutPagesComponent implements OnInit {
  title = 'angular-test';
  images: IImages[] = data
  ngOnInit(): void {
    
  }
}
