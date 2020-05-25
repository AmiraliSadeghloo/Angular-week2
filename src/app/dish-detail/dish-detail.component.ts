import { Component, OnInit,Input } from '@angular/core';
import {Dish} from "../shared/dish";
import {Params, ActivatedRoute, Route} from "@angular/router";
import {Location} from "@angular/common";
import {DishService} from "../services/dish.service";

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  // @Input()
  // dish :Dish;

  dish:Dish;

  constructor(private dishservice:DishService, private location:Location,private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dish=this.dishservice.getDish(id);
  }

  goBack():void{
    this.location.back();
  }

}
