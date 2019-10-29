import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/hotel.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HotelService } from '../../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotel = new Hotel();
  ban = true;
  constructor(private hotelSer: HotelService, private route: ActivatedRoute, private router: Router) { }

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

     console.log("HOTEL");
     console.log(this.hotel);

     if(this.hotel.hasOwnProperty('id')){

      console.log(this.hotel.id);
      this.hotelSer.updateHotel(this.hotel.id, this.hotel)
      .subscribe( resp => {
          console.log(resp);
          this.router.navigate(['/hotels']);
      });

     }else{
      console.log(this.hotel);
      this.hotel.id = '0';
      this.hotelSer.createHotel(this.hotel)
      .subscribe( resp => {
          console.log(resp);
          this.router.navigate(['/hotels']);
      });
     }

  }
}
