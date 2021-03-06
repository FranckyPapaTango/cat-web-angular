import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
//import { NouveauProduitsComponent } from './nouveau-produits/nouveau-produits.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CatalogueService } from './services/catalogue.service';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    //NouveauProduitsComponent,
    NewProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CatalogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
