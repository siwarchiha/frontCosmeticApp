import { ProductService } from './../../services/product.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id:any;
  products:any;
  product:any={};
  productForm:FormGroup;

  constructor( private activatedRoute: ActivatedRoute , private router:Router , private productService:ProductService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.productService.getProductById(this.id).subscribe(
      (data)=>{
        this.product=data;
      }
    );

  }
  editProduct(){
    this.productService.ediProduct(this.product).subscribe(
      (data)=>{
        console.log(data);
      }
    );
    this.router.navigate(["admin"]);
  }

}
