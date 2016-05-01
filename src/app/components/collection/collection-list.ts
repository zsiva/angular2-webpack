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
            <th class="text-capitalize" *ngFor="#headerItem of tableHeader">{{headerItem}}</th>
            <th [hidden]="!actions">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="#row of tableContent">
            <td *ngFor="#item of items(row);">{{row[item]}}</td>
            <td [hidden]="!actions"><a class="text-right" [routerLink]="[infoLink, {id: '1'}]">Info</a></td>
        </tr>
      </tbody>
  </table>
  </div>
`
})

export class CollectionList {

  @Input() tableContent:any[];
  @Input() infoLink:any[];
  @Input() tableHeader:any[];
  @Input() actions:boolean = true;

  constructor() {
  }
  ngOnInit() {
  }
  items(row) : Array<string> {
    return Object.keys(row);
  }
}
