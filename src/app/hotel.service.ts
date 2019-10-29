
import { Injectable } from '@angular/core';
import { Hotel } from '../app/hotel.model';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  hotels: Hotel[]=[{
    id: '1',
    nombre: 'Hoyel',
    categoria: 5,
    direccion: 'Direccion',
    precio: 50,
    foto: 'image/foto.jpg'
  }];


  constructor(private http: HttpClient) { }

  getAllHotels(){
    return this.http.get<Hotel[]>(`${environment.api_url}/`);
  }

  getHotel(id: string){
    return this.http.get<Hotel>(`${environment.api_url}/${id}`);
  }

  createHotel(hotel: Hotel){
    console.log(hotel);
    return this.http.post(`${environment.api_url}`, hotel);
  }

  updateHotel(id: string, changes: Partial<Hotel>){
    return this.http.put(`${environment.api_url}/hotel/${id}`, changes);
  }


  deleteHotel(id: string){
    return this.http.delete(`${environment.api_url}/${id}`);
  }

}
