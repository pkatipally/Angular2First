/**
 * Created by RJK on 9/29/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {FormsModule} from "@angular/forms";
import {ProductFilterPipe} from "./products/product-filter.pipe";
import {ProductModule} from "./products/product.module";
@NgModule({
    imports: [  BrowserModule,ProductModule ],
    declarations: [ AppComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}