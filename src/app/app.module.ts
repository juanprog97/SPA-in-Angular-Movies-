import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';"styles.css"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
