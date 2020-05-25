import { Injectable } from '@angular/core';
import {Leader} from "../shared/leader";
import {LEADERS} from "../shared/leaders";
import {Promotion} from "../shared/promotion";
import {PROMOTIONS} from "../shared/promotions";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader():Leader[]{
    return LEADERS;
  }
  getPLeader():Leader{
    return LEADERS.filter((pleader) => pleader.featured)[0];

  }
}

