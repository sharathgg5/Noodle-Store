import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant';
import { NoodleStoreService } from '../noodle-store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  img: string;
  @Input() info: Restaurant;
  constructor(private storeService: NoodleStoreService) { }

  ngOnInit(): void {
    this.storeService.getImage().subscribe((img: string) => {
      this.img = img;
    });
  }

}
