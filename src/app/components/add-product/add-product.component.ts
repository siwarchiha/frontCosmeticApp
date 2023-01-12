import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm:FormGroup;
  product:any={};
  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(
      (data)=>{
        console.log("added",data);
        
      }
    );

  }

}
