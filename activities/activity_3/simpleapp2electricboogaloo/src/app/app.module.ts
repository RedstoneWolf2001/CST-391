import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { InfoComponent } from './info/info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
	ShopComponent
  ],
  imports: [
	AppRoutingModule,
    BrowserModule,
	FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
