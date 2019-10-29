import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../hotel.service';
import { Hotel } from 'src/app/hotel.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) { }

  buscar(termino: string){
      this.hotelService.getHotelByName(termino).subscribe( (data: any) => {
            console.log(data);
            this.hotels = data;
      });
  }

}
