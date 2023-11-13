import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './shared/features/header/header.module';
import { HomeComponent } from './home/feature/home.component';
import { FooterUiComponent } from './shared/ui/footer-ui/footer-ui.component';
import { FooterUiModule } from './shared/ui/footer-ui/footer-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterUiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterUiModule,
    HttpClientModule,
    RouterModule.forRoot([],{
      scrollPositionRestoration:'enabled'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
