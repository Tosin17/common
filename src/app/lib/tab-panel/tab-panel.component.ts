import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    if (!this.tabs.find((tab) => tab.selected)) {
      this.tabs.first.selected = true;
    }
  }

  setSelected(tab: TabComponent) {
    this.tabs.forEach((tab) => (tab.selected = false));
    tab.selected = true;
  }
}
