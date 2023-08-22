import { Component } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  user: User | null;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }

}
