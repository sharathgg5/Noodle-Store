import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Observer } from 'rxjs';
import { Restaurant } from './restaurant';
import { Image } from './image';
import { stores, images } from './data';

@Injectable({
  providedIn: 'root',
})
export class NoodleStoreService {

  constructor() {}

  getRestaurant(): Observable<Restaurant[]> {
    return of(stores);
  }

  getImages(): Observable<Image[]> {
    return of(images);
  }

  getImage(): Observable<string> {
    return of(images[Math.floor(Math.random() * 5)].Image);
  }

  getRestaurantByRecipe(recipe: string): Observable<Restaurant> {
    return new Observable(subscriber => {
      const index = stores.findIndex( x => x.Variety === recipe);
      if (index === -1) {
        subscriber.next();
      } else {
        subscriber.next(stores[index]);
      }
      subscriber.complete();
    });
  }

  searchBrand(text: string): Observable<Restaurant[]> {
    return new Observable(subscriber => {
      const restaurants: Restaurant[] = [];
      stores.forEach( store => {
        if (store.Brand.toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
          restaurants.push(store);
        }
      });
      subscriber.next(restaurants);
      subscriber.complete();
    });
  }
}
