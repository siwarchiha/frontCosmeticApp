import { CoffretService } from './../../services/coffret.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-coffret',
  templateUrl: './edit-coffret.component.html',
  styleUrls: ['./edit-coffret.component.css']
})
export class EditCoffretComponent implements OnInit {
  id:any;
  coffret:any={};

  constructor(private router:Router, private coffretService:CoffretService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.coffretService.getCoffretById(this.id).subscribe(
      (data)=>{
        this.coffret=data;
      }
    );
  }
  editCoffret(){
    this.coffretService.ediCoffret(this.coffret).subscribe(
      (data)=>{
        console.log("modified",data);
        
      }
      
    );
    this.router.navigate(["admin"]);
  }

}
