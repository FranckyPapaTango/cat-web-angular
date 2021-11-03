import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../model/produit.model';

/*@Injectable({
providedIn: 'root'
})*/ //<= cet annotation utilisée à la place de "@Injectable()" dispense de déclarer le provider dans la section "provider" de "app.module.ts"
@Injectable()
export class CatalogueService {

constructor(private httpClient:HttpClient) { }
  
public getProduits(page:number, size:number){
return this.httpClient.get("http://localhost:8080/produits"+"?page="+page+"&size="+size);
}

//**************CRUD : *******************

public getProduitsByKeyword(mc:string, page:number, size:number){
return this.httpClient.get("http://localhost:8080/produits/search/byDesignationPage"+"?mc="+mc+"&page="+page+"&size="+size);
}

public deleteResource(url){
return this.httpClient.delete(url);
}

/*
public saveResource(url,data){
return this.httpClient.post(url,data);
} */

public saveResource(url,data):any{
//méthode utilisant le pojo de type Produit:
//public saveResource(url,data):Observable<Produit>{
return this.httpClient.post(url,data);
}
    
public updateResource(url,data):any{
//public updateResource(url,data):Observable<Produit>{
return this.httpClient.put(url,data);
}



  // Méthode permettantbde consulter une ressource à partir d'un url
  // SERT POUR L UPDATE
public getResource(url):any{
//public getResource(url):Observable<Produit>{
return this.httpClient.get(url);
}

}

