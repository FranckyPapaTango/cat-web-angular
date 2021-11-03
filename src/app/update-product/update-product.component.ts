import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';
import {Produit} from '../model/produit.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
public currentProduct:Produit;//exploitation du modèle POJO
public url: string;

  constructor(private router:Router, 
              private activatedRoute:ActivatedRoute,
              private catService:CatalogueService) { }

  ngOnInit() {
 // console.log(this.activatedRoute);//permet d'afficher le paramètre passé dans l'Url, dans la console de l'outil de dev
 //console.log(this.activatedRoute.snapshot.params.id); //ceci affiche la valeur de l'id dans la console

/* ce qui suit permet d'exploiter les url pour l'update * atob() est la fonction inverse de bto() */
//let url=atob(this.activatedRoute.snapshot.params.id);
// rendre "attribut" :    
this.url=atob(this.activatedRoute.snapshot.params.id); 
console.log(this.url);

this.catService.getResource(this.url)
.subscribe(data=>{    
    console.log(data);
     this.currentProduct=data;    //"caste du résultat en Produit
},err=>{
    console.log(err);
    })
}



onUpdateProduct(value:any){
 this.catService.updateResource(this.url,value)
 .subscribe(data =>{
     alert("Mise à Jour Réussie !");
     this.router.navigateByUrl("/produits");
     },err=>{
    console.log(err);
    }
     ); 
    }
    
}
