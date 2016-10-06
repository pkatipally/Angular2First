/**
 * Created by RJK on 9/29/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ProductModule} from "./products/product.module";
import {HttpModule} from "@angular/http";
import { RouterModule } from '@angular/router';
import "rxjs/Rx";
import {routing} from "./app.routing";
import {WelcomeComponent} from "./home/welcome.component";
@NgModule({
    imports: [  BrowserModule,HttpModule, RouterModule, routing, ProductModule ],
    declarations: [ AppComponent,WelcomeComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}