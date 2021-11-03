import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes: Routes = [
{ 
     path :"produits", 
     component : ProduitsComponent
},
{ 
     path :"new-product", 
     component : NewProductComponent
},
{ 
     path :"", 
     redirectTo : "/produits", pathMatch:"full"
},
{ 
     path :"update-product/:id", // :id avec paramètre
     component : UpdateProductComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
