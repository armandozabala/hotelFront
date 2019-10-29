import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel.service';
import { Hotel } from 'src/app/hotel.model';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private hotelservice: HotelService) { }
  hotels: Hotel[]  = [];

  ngOnInit() {
    this.hotelservice.getAllHotels().subscribe( res => {
          this.hotels = res;
    });
  }

  deleteHotel(id: any, i: number){

    this.hotels.splice(i, 1);

    this.hotelservice.deleteHotel(id).subscribe();
  }

}
