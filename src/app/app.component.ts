import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  List:Array<any>=[
    {name:"Santosh More", id:"10"},
    { name: "Minal Bansal", id: "11"},
    { name: "Sushant Ghatage", id: "12"},
    { name: "Bupesh Moyal", id: "13"},
  ]
  Config:any={
    optionKey:"name",
    search:false
  }
  SelectedValue:any;

  show(){
    console.log(this.SelectedValue);
  }
  onSelection($event){
    console.log("Event :",$event);
  }
}
