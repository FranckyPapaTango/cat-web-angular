import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

 public produits:any;
 public size:number=2; // <= nombre d'éléments affichés par page
 public totalPages:number;
 public currentPage:number=0;//<= page par défaut
 public pages:Array<number>;
 public currentKeyword:string="";
 
 
 
  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit() {
      this.onGetProducts();
  }
  
  onGetProducts(){
     this.currentKeyword="";
this.catService.getProduits(this.currentPage,this.size)
.subscribe(data=>{
this.totalPages=data["page"].totalPages;
this.pages=new Array<number>(this.totalPages);
this.produits=data;
},
err=>{
console.log(err);
}
)
}
    
    
    
    onPageProduct(i){
 this.currentPage=i;   
 //this.onGetProducts();  
 this.searchProduits();   
    }
    
    onSearch(form:any){    
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    this.searchProduits()
    
    }  
    
     
    
    searchProduits(){
 //    console.log(value); //POUR TEST
    
this.catService.getProduitsByKeyword(this.currentKeyword, this.currentPage, this.size)
.subscribe(data=>{
this.totalPages=data["page"].totalPages;
this.pages=new Array<number>(this.totalPages);
this.produits=data;
},
err=>{
console.log(err);
}
) 
    }
    

    onDeleteProduct(p){//"p" vient de la vue html
    let conf=confirm("êtes vous sûr de supprimer cet élément ?");
    if(conf){
    console.log(p);
    this.catService.deleteResource(p._links.self.href)
    .subscribe(data=>{    
    //this.onGetProducts();
    this.onPageProduct(0);

    }, err=>{
    console.log(err);
    });
    
    }
    
    }
    
/*  onUpdateProduct(p){
    this.router.navigateByUrl("/update-product/"+p.id);
    } */ 
    
    onUpdateProduct(p){
    let url=p._links.self.href;
    //utilisation de la fonction btoa() d'encodage d'url en base64 "btoa()":
    this.router.navigateByUrl("/update-product/"+btoa(url));
    }  
    
    
}
