import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/hotel.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HotelService } from '../../hotel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotel = new Hotel();
  ban: boolean = true;
  constructor(private hotelSer: HotelService, private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    console.log(id);

    if(id !== 'nuevo'){
        this.ban = false;
       this.hotelSer.getHotel(id)
       .subscribe( resp => {

          this.hotel = resp;

       });
    }

  }

  save(form: NgForm){
     // console.log(form);
     if(form.invalid){
       console.log("NO VALIDO");
       return;
     }
      console.log(this.hotel);
      this.hotel.id = '0';
      this.hotelSer.createHotel(this.hotel)
      .subscribe( resp => {
          console.log(resp);
      });
  }
}
