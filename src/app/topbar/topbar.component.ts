import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  text: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(): void {
    if (this.text) {
      this.router.navigateByUrl(this.text);
    } else {
      this.router.navigateByUrl('');
    }
  }

}
