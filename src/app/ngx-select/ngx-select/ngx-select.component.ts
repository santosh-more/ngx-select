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
  Configure: any = {
    optionKey: '',
    placeholder: 'Select',
    search: true
  }
  @Output() SelectedValue: Array<any> = [];
  // @Output() SelectedValue = new EventEmitter<Array<any>>();
  @Output() onSelection = new EventEmitter<Array<any>>();
  ListBackup: Array<any>;
  constructor() {
  }

  ngOnInit() {
    Object.assign(this.Configure, this.Config);
    this.ListBackup = this.List;
  }
  getSelected(i) {
    this.SelectedValue = i;
    this.onSelection.emit([i]);
  }
  search(searchKey) {
    this.List = _.filter(this.ListBackup, (l) => { if (l[this.Configure.optionKey].toString().toLowerCase().indexOf(searchKey.toLowerCase()) != -1) return l; });
  }
}
