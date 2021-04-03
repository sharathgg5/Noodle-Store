import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoodleStoreService } from '../noodle-store.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  img: string;
  restaurant: Restaurant;
  constructor(private route: ActivatedRoute, private storeService: NoodleStoreService) {}

  ngOnInit(): void {
    const recipe = this.route.snapshot.paramMap.get('id');
    if (recipe) {
      this.loadRestaurantData(recipe);
      this.loadImage();
    }
  }

  loadRestaurantData(recipe: string): void {
    this.storeService.getRestaurantByRecipe(recipe).subscribe( (restaurant: Restaurant) => {
      this.restaurant = restaurant;
    });
  }
  loadImage(): void {
    this.storeService.getImage().subscribe((img: string) => {
      this.img = img;
    });
  }
}
