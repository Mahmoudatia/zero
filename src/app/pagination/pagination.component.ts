import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  toppings: FormGroup;
  constructor(fb: FormBuilder) {
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
    });
  }
  ngOnInit(): void {
  }


}
