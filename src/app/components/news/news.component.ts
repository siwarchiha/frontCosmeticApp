import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  T:any =[] ; 

  constructor() { }

  ngOnInit() {
    this.T= [
      {id:1, author: "92,00  € ", title:"Prix de détail conseillé : 115,00 € ",date:"Économisez : 23,00 €",img:"assets/images/img.png",avatar:"assets/images/person_1.jpg"},
      {id:2, author:"17,45 €", title:"Prix de détail conseillé : 29,45 €",date:"Économisez : 12,00 €",img:"assets/images/img1.png",avatar:"assets/images/person_2.jpg"},
      {id:3, author:"129,35 €", title:"Prix de détail conseillé : 199,00 €",date:"Économisez : 69,65 €",img:"assets/images/img2.png",avatar:"assets/images/person_3.jpg"},
  
    ];
  }

}
