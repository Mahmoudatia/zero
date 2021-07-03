import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { SinglCardComponent } from './singl-card/singl-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MainListingScreenComponent } from './main-listing-screen/main-listing-screen.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipePipe } from './truncate-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SinglCardComponent,
    PaginationComponent,
    MainListingScreenComponent,
    TruncatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // martial component
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
