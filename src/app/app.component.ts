import { Component, OnInit} from '@angular/core';
// import { HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {TestUser} from './models/TestUser';
import {Observable} from 'rxjs';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [HttpService]
})
export class AppComponent implements OnInit {

  testUser: TestUser;
  testUsers: TestUser[];
  user: User;
  users: User[];

  response: any;

  constructor(private http: HttpClient) { }
  // constructor(private httpService: HttpService) {}

  ngOnInit() {
    // this.http.get('user.json') //Observable<any>
    // this.httpService.getUsers()
    // .subscribe((data:User) => this.user=data);
    // .subscribe(data => this.list_users=data["userList"]);
    //   .subscribe(data => this.list_users = data);

    this.http.get<TestUser>('http://localhost:8081/lkz_project_war_exploded/angular/test_user')
    .subscribe((testUser) => {
      this.testUser = testUser;
      console.log(this.testUser);
    });

    this.http.get<TestUser[]>('http://localhost:8081/lkz_project_war_exploded/angular/test_users')
    .subscribe((testUsers) => {
      this.testUsers = testUsers;
      console.log(this.testUsers);
    });

    this.http.get<User>('http://localhost:8081/lkz_project_war_exploded/angular/user')
    .subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });

    this.http.get<User[]>('http://localhost:8081/lkz_project_war_exploded/angular/users')
    .subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }
}