import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconInputComponent } from './lib/icon-input/icon-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';

@NgModule({
  declarations: [AppComponent, IconInputComponent, InputRefDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
