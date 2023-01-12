import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventUrl:"http://localhost:8089/api/events";

  constructor(private http: HttpClient) { }
  addEvent(obj){
    return this.http.post(this.eventUrl,obj)
  }
  editEvent(obj){
    return this.http.put(`${this.eventUrl}`,obj)
  }
  getEventById(id){
    return this.http.get(`${this.eventUrl}/${id}`)
  }
  getAllEvents(){
    return this.http.get(`${this.eventUrl}`)

  }
  deleteEventById(id){
    return this.http.delete(`${this.eventUrl}/${id}`)
  }
}
