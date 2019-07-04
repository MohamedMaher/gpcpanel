import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.css']
})
export class NewslettersComponent implements OnInit {

  newsletters: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getNewsletters("Newsletters").subscribe((data) => {
      this.newsletters = data;
    });
  }
}
