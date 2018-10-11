import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  constructor() {
  }

  ngOnInit() {
    Object.assign(this.Configure, this.Config);
  }
  getSelected(i) {
    this.SelectedValue = i;
    this.onSelection.emit([i]);
  }
}
