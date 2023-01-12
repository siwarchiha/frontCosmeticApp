import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditCoffretComponent } from './components/edit-coffret/edit-coffret.component';
import { AddCoffretComponent } from './components/add-coffret/add-coffret.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  //http://localhost/4200/
  { path: "", component: HomeComponent },
  //http://localhost/4200/signin
  { path: "signin", component: LoginComponent },
  //http://localhost/4200/subscription
  { path: "subscription", component: SignupComponent },
  //http://localhost/4200/blog
  { path: "blog", component: BlogComponent },
  //http://localhost/4200/addProduct
  { path: "AddProduct", component: AddProductComponent },
  //http://localhost/4200/editProduct
  { path: "EditProduct/:id", component: EditProductComponent },
  //http://localhost/4200/addEvent
  { path: "AddEvent", component: AddEventComponent },
  //http://localhost/4200/editEvent
  { path: "EditEvent/:id", component: EditEventComponent },
  //http://localhost/4200/addCoffret
  { path: "AddCoffret", component: AddCoffretComponent },
  //http://localhost/4200/editCoffret
  { path: "EditCoffret/:id", component: EditCoffretComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
