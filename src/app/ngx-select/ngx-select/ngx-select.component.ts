import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from "underscore";
@Component({
  selector: 'ngx-select-dp',
  templateUrl: './ngx-select.component.html',
  styleUrls: ['./ngx-select.component.css']
})
export class NgxSelectComponent implements OnInit {
  @Input() List: Array<any> = [];
  @Input() Config: any = {};
  // static sortOrder=enum
  Configure: any = {
    optionKey: '',
    placeholder: 'Select',
    searchPlaceholder:'Search',
    search: true,
    limitTo: -1,
    // sortOrder:
  }
  @Output() SelectedValue: Array<any> = [];
  @Output() onSelection = new EventEmitter<Array<any>>();
  ListBackup: Array<any>;
  constructor() {
  }

  ngOnInit() {
    Object.assign(this.Configure, this.Config);
    setTimeout(() => {
      this.ListBackup = this.List;
      this.List = this.sliceIfLimit(this.List);
    }, 0);
  }
  getSelected(i) {
    this.SelectedValue = i;
    this.onSelection.emit([i]);
  }
  search(searchKey) {
    let filteredList;
    filteredList = _.filter(this.ListBackup, (l) => { if (l[this.Configure.optionKey].toString().toLowerCase().indexOf(searchKey.toLowerCase()) != -1) return l; });
    this.List = (this.Configure.limitTo > 0) ? filteredList.slice(0, this.Configure.limitTo) : filteredList;
  }
  sliceIfLimit(list: Array<any>) {
    return (this.Configure.limitTo > 0) ? list.slice(0, this.Configure.limitTo) : list;
  }
}
