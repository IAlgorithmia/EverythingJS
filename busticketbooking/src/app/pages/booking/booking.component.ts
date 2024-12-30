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

  seatArray: any[] = [];

  scheduleId : number= 0;
  constructor (private activatedRouter : ActivatedRoute, private masterServ : MasterService){
    this.activatedRouter.params.subscribe((res : any) => {
      this.scheduleId = res.id;
      this.getScheduleById();
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

}
