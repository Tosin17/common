import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent implements AfterContentInit {
  @Input() headerTmpl: TemplateRef<any>;
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;
  tabsContext = {
    tabs: null,
  };

  ngAfterContentInit() {
    if (this.tabs.first) {
      this.tabs.first.selected = true;
    }

    this.tabsContext.tabs = this.tabs;
  }

  setSelected(tab: TabComponent) {
    this.tabs.forEach((tab) => (tab.selected = false));
    tab.selected = true;
  }
}
