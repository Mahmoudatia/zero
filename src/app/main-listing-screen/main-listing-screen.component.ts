import { Component, OnInit, Input, Output } from '@angular/core';
import { TVService } from './../services/top-rated.service';

@Component({
  selector: 'app-main-listing-screen',
  templateUrl: './main-listing-screen.component.html',
  styleUrls: ['./main-listing-screen.component.scss']
})
export class MainListingScreenComponent implements OnInit {

  endPoint: string = 'https://api.themoviedb.org/3/tv'
  apiKey: string = '?api_key=accaec27531cdac62fe66dd5641c6000&language=en-US/'
  Data: any = '';
  singleItem: string = '';
  constructor(private tvService: TVService) {

  }
  ngOnInit(): void {
  }

  getData(id?: number) {
    if (id){
      this.tvService.getData(`${this.endPoint}/${id}${this.apiKey}`).subscribe((res) => this.singleItem = JSON.stringify(res))
    }
    else {
      this.tvService.getData(`${this.endPoint}/top_rated${this.apiKey}`).subscribe(res => this.Data = res.results)
    }
  }
}
