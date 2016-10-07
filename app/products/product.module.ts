/**
 * Created by RJK on 10/3/2016.
 */
import { NgModule } from '@angular/core';
import {ProductListComponent} from "./product-list.component";
import {ProductFilterPipe} from "./product-filter.pipe";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "../common/common.module";
import {ProductDetailComponent} from "./product-detail.component";
import {RouterModule} from "@angular/router";
@NgModule({
    imports : [BrowserModule,FormsModule,CommonModule, RouterModule],
    exports : [ProductListComponent],
    declarations: [ ProductFilterPipe,ProductListComponent,ProductDetailComponent ],
})
export class ProductModule { }