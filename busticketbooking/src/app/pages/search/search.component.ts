import {inject,  Component, OnInit } from '@angular/core';
import {MasterService} from '../../core/services/master.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {

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
    // this.masterSrv.searchBuses(this.travelInformation.value.from, this.travelInformation.value.to, this.travelInformation.value.date)
  }

}
