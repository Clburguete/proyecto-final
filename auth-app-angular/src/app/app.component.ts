import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any;
  error:any;
  constructor(private session: SessionService) { }

   ngOnInit() {

      this.session.getLoginEmitter().subscribe(user => this.user=user)
   }
   logout() {
     this.session.logout()
     .subscribe(
       () => this.successCb(null),
       (err) => this.errorCb(err)
     );
   }
   errorCb(err) {
     this.error = err;
     this.user = null;
   }

   successCb(user) {
     this.user = user;
     this.error = null;
   }

}
