import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../gallery/Image';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() selectedImage: Image;

  constructor() { }

  ngOnInit() {
  }

}
