import {Component, OnInit} from "@angular/core";
import any = jasmine.any;
import {IProduct} from "./product";
import {ProductService} from "./product.service";
@Component({
    selector: 'products',
    templateUrl: 'app/products/products-list.component.html',
    styleUrls : ['app/products/product-list.component.css'],
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter:string;
    products: IProduct[];
    errorMessage:string;

    constructor(private _productService:ProductService){
    }
    toggleImage():void {
        this.showImage  = !this.showImage;
    }
    ngOnInit():void{
         this._productService.getProducts()
             .subscribe(products => this.products = products,
             error => this.errorMessage = <any>error);
        console.log('ProductListComponent : In OnInit');
    }

    onRatingClicked(message:string):void{
        this.pageTitle = 'Product List: ' + message;
    }

}

