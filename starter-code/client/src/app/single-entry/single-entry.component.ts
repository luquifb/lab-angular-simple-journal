import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceApiService } from '../services/service-api.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})

export class SingleEntryComponent implements OnInit {
  myEntry;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceApi: ServiceApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
    })
  }

  getEntryDetails(id) {
    this.serviceApi.get(id)
    .subscribe(entr => this.myEntry = entr)
  }

}
