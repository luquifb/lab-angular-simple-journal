import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../services/service-api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],

})

export class EntryListComponent implements OnInit {
  entries;

  constructor(private serviceApi: ServiceApiService) { }

  ngOnInit() {
    this.serviceApi.getList()
      .subscribe(entr => this.entries = entr)
  }

}
