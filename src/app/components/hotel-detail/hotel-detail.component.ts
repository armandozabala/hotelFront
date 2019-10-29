import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute} from '@angular/router';
import { HotelService } from '../../hotel.service';
import { Hotel } from 'src/app/hotel.model';
@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  hotel = new Hotel();
  constructor(private route: ActivatedRoute, private hotelService: HotelService) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.hotelService.getHotel(id).subscribe( (data:any) => {
      console.log(data);
      this.hotel = data;
   });
    /*
    this.route.params.subscribe( (params:Params) => {

        const id = params.id;
        console.log(id);

    });*/
  }

}
