import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoffretService } from './../../services/coffret.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-coffret',
  templateUrl: './add-coffret.component.html',
  styleUrls: ['./add-coffret.component.css']
})
export class AddCoffretComponent implements OnInit {
  coffret:any={};
  coffretForm:FormGroup;

  constructor( private router:Router,private coffretService:CoffretService) { }

  ngOnInit() {
  }
  addCoffret(){
    this.coffretService.addCoffret(this.coffret).subscribe(
      (data)=>{
        console.log("added",data);
        
      }
    );
  }

}
