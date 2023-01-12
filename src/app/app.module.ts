import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { NewsComponent } from './components/news/news.component';
import { NewsInfoComponent } from './components/news-info/news-info.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { AddCoffretComponent } from './components/add-coffret/add-coffret.component';
import { EditCoffretComponent } from './components/edit-coffret/edit-coffret.component';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    HomeComponent,
    CupEventComponent,
    NewsComponent,
    NewsInfoComponent,
   
    LoginComponent,
    SignupComponent,
    AddProductComponent,
    EditProductComponent,
    AddEventComponent,
    EditEventComponent,
    AddCoffretComponent,
    EditCoffretComponent,
    VideosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
