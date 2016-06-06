import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

import {FlagsListService} from '../../services/flags_list';
import {RdWidgetBody} from '../rd-widget-body/rd-widget-body';
import {RdWidget} from '../rd-widget/rd-widget';
import {RdWidgetHeader} from '../rd-widget-header/rd-widget-header';
import {CollectionList} from '../collection/collection-list';

@Component({
  selector: 'flags',
  providers: [FlagsListService],
  directives: [RdWidgetBody, RdWidget, RdWidgetHeader, CollectionList, NgFor],
  templateUrl: 'app/components/flags/list.html',
  styleUrls: ['app/styles/flags.css']

})
export class Flags {
  flags:any[];
  header:any[];

  constructor(public flagsService: FlagsListService) {
    this.flags = flagsService.all();

     this.header = Object.keys(this.flags[0]);
  }
}