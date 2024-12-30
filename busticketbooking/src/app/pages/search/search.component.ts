import {inject,  Component, OnInit } from '@angular/core';
import {MasterService} from '../../core/services/master.service';
import {Observable} from 'rxjs';
import {AsyncPipe, DatePipe} from '@angular/common';
import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe, ReactiveFormsModule, DatePipe, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {

  busList : any[] = [];

  travelInformation = new FormGroup({
    from : new FormControl(''),
    to : new FormControl(''),
    date : new FormControl('')
  })

  masterSrv = inject(MasterService);

  ngOnInit() : void{
    this.getLocations();
  }

  location : Observable<any[]> = new Observable<any[]>();

  getLocations(){
    this.location = this.masterSrv.getLocations();
  }

  onSearch(){
    const {from, to, date} = this.travelInformation.value;
    this.masterSrv.searchBuses(from, to, date).subscribe((res) => {
      this.busList = res;
      console.log("Bus list fetched successfully");
      console.log(this.busList);
    })
  }
}
