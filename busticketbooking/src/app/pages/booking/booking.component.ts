import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MasterService} from '../../core/services/master.service';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  scheduleData: any;
  seatArray: number [] = [];
  bookedSeatsArray : number [] = [];
  scheduleId : number= 0;
  userSelectedSeatArray : number [] = [];

  constructor (private activatedRouter : ActivatedRoute, private masterServ : MasterService){
    this.activatedRouter.params.subscribe((res : any) => {
      this.scheduleId = res.id;
      this.getScheduleById();
      this.getBookedSeats();
    })
  }

  getScheduleById(){
    this.masterServ.getScheduleById(this.scheduleId).subscribe((res) => {
      this.scheduleData = res;
      for (let i = 1; i <= this.scheduleData.totalSeats; i++) {
        this.seatArray.push(i);
      }
    })
  }

  getBookedSeats(){
    this.masterServ.getBookedSeats(this.scheduleId).subscribe((res) => {
      this.scheduleData = res;
      for (let i = 1; i <= this.scheduleData.totalSeats; i++) {
        this.seatArray.push(i);
      }
    })
  }

  checkIfSeatAvaiable(seatNo : number){
    return this.bookedSeatsArray.indexOf(seatNo);
  }

  selectSeat(seatNo : number){
    this.userSelectedSeatArray.push(seatNo);
  }

  checkIfSeatSelected(seatNo : number){
    return this.userSelectedSeatArray.indexOf(seatNo);
  }
}
