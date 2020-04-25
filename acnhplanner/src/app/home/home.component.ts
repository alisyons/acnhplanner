import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public randomFish: string;
  public randomNumber: number;
  public name: string;
  private min: number;
  private max: number;
  private data: any;
  private acnhApiUrl: string;

  constructor(private router: Router) {
  }

  async getData() {
    this.min = 1;
    this.max = 20;
    this.randomNumber =
      Math.floor(Math.random() * (+this.max - +this.min)) + +this.min;
    this.acnhApiUrl = 'http://acnhapi.com/fish/' + this.randomNumber;
    const response = await fetch(this.acnhApiUrl);
    this.data = await response.json();
    this.randomFish = this.data.name['name-en'];
    console.log(this.data['file-name']);
  }

  buttonClick() {
    this.getData();
  }

  goToWishlist() {
    this.router.navigateByUrl('wishlist');
  }

  ngOnInit() {
  }

}
