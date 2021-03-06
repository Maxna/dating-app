import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
  providers: [DataService]
})
export class SwipeComponent implements OnInit {
  users;
  user: User;

  constructor(private dataService: DataService) { }

  getUsers() {
    return this.dataService.getUsers().then(users => this.users = users);
  }
  likeUser(user) {
    user.liked = true;
    if(user.liked) {
      const hearted = document.getElementById(user.id);
      hearted.classList.toggle('been-hearted');
    }

    // const active = document.querySelector('.swiper');
    // // const pos = (num) => num += num;
    // const isActive = (num) => active.setAttribute('style', "transform: translateX(-" + (num += num) + '%)');
    // isActive(100);
  }

  reject(user) {
    user.rejected = true;
  }

  ngOnInit() {
    this.getUsers();
  }

}
