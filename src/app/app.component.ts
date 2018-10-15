import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue: Array<any> = [];
  constructor(public http: Http) {
    this.getCountryList();
  }
  title = 'app';
  List: Array<any> = [];
  Config: any = {
    optionKey: "name",
    search: true,
    limitTo: 5
  }

  show() {
    console.log(this.selectedValue);
  }
  onSelection($event) {
    console.log("Event :", $event);
  }
  getCountryList() {
    this.http.get('assets/data/country.json')
      .subscribe(res => {
        this.List = JSON.parse(res['_body']);
      });
  }
}
