import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Restaurant } from '../restaurant';
import { NoodleStoreService } from '../noodle-store.service';
import { Image } from '../image';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ascending = false;
  noodleStores: Restaurant[];
  constructor(
    private noodleStoreService: NoodleStoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      const text = param.params.text;
      if (text) {
        this.search(text);
      } else {
        this.loadNoodleStores();
      }
    });
  }

  loadNoodleStores(): void {
    this.noodleStoreService.getRestaurant().subscribe((data: Restaurant[]) => {
      this.noodleStores = data;
    });
  }

  search(text: string): void {
    this.noodleStoreService
      .searchBrand(text)
      .subscribe((data: Restaurant[]) => {
        this.noodleStores = data;
      });
  }

  sort(): void {
    this.ascending = !this.ascending;
    if (this.ascending) {
      this.noodleStores.sort((a, b) => b.Stars - a.Stars);
    } else {
      this.noodleStores.sort((a, b) => a.Stars - b.Stars);
    }
  }
}
