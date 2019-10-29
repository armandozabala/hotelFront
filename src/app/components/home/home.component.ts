import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/hotel.service';
import { Hotel } from 'src/app/hotel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotels: Hotel[]  = [];

  constructor(private hotelservice: HotelService) { }

  ngOnInit() {
    this.hotelservice.getAllHotels().subscribe( res => {
          this.hotels = res;
    });
  }

}
