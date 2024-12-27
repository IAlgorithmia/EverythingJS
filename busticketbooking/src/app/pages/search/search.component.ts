import {inject,  Component, OnInit } from '@angular/core';
import {MasterService} from '../../core/services/master.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  masterSrv = inject(MasterService);

  ngOnInit() : void{
    this.getLocations();
  }

  location : Observable<any[]> = new Observable<any[]>();

  getLocations(){
    this.location = this.masterSrv.getLocations();
  }

}
