import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-companynews',
  templateUrl: './companynews.component.html',
  styleUrls: ['./companynews.component.css']
})
export class CompanynewsComponent implements OnInit {

  companyNews:any;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getNewsletters("company").subscribe((data)=>{
      this.companyNews=data;
    });
  }

}
