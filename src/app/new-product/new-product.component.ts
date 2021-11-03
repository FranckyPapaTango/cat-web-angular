import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {Produit} from '../model/produit.model';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
//private currentProduct : Object;
public currentProduct : Produit; //<= pour exploiter le POJO
public mode:number=1;

  //constructor(private catService:CatalogueService) { }
  constructor(private catService:CatalogueService, private router:Router) { } //redirrige après le save du produit

  ngOnInit() {
  }

  onSaveProduct(data:any){
//console.log(value);
this.catService.saveResource("http://localhost:8080"+"/produits",data)
    .subscribe(res=>{    
    console.log(res);
    //this.router.navigateByUrl("/produits");//réaffiche la page "/produits" après un save d'élément
    this.currentProduct=res;
    this.mode=2;//sert à afficher ou non le produit enregistré
},err=>{
    console.log(err);
    })
}


onNewProduct(){
this.mode=1;//retour au mode "Enregistrement de produit"
}



}
