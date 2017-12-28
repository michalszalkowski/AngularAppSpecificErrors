import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import 'rxjs/add/operator/do';
import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {PostService} from "./post/post.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
