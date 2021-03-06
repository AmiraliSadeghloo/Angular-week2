import { Component, OnInit } from '@angular/core';
import {PROMOTIONS} from "../shared/promotions";
import {Promotion} from "../shared/promotion";
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import {LeaderService} from "../services/leader.service";
import {Leader} from "../shared/leader";
import {LEADERS} from "../shared/leaders";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish:Dish;
  promotion:Promotion;
  pLeader:Leader;
  constructor(private dishService:DishService,private Promotionservice:PromotionService,private leaderService:LeaderService) { }

  ngOnInit() {
    this.dish=this.dishService.getFeaturedDish();
    this.promotion=this.Promotionservice.getFeaturedPromotion();
    this.pLeader=this.leaderService.getPLeader();

  }

}
