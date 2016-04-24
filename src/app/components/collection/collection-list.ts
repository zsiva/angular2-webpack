import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'collection-list',
  directives: [NgFor, ROUTER_DIRECTIVES],
  template: `
  <div class="table-responsive">
  <table class="table table-bordered">
    <thead>
        <tr>
            <th class="bg-primary text-capitalize" *ngFor="#headerItem of header">{{headerItem}}</th>
            <th class="bg-primary">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="#row of model">
            <td *ngFor="#item of items(row);">{{row[item]}}</td>
            <td><a class="text-right" [routerLink]="['/JumperEdit']">Edit</a></td>
        </tr>
      </tbody>
  </table>
  </div>
`
})

export class CollectionList {

  @Input() model:any[];
  header:any[];

  constructor() {
  }
  ngOnInit() {
      this.header = Object.keys(this.model[0]);
  }
  items(row) : Array<string> {
    return Object.keys(row);
  }
  edit() {
  }
}