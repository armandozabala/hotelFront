import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) { }

  buscar(termino: string){
      this.hotelService.getHotelByName(termino).subscribe( (data: any) => {
            console.log(data);
            this.hotels = data;
      });
  }

}
