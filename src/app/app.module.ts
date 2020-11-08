import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconInputModule } from './lib/icon-input.module';
import { TabComponent } from './lib/tab/tab.component';
import { TabPanelComponent } from './lib/tab-panel/tab-panel.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, TabPanelComponent, TabComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, IconInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
