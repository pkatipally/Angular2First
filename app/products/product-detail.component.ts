import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {IProduct} from "./product";
import {ProductService} from "./product.service";
/**
 * Created by RJK on 10/6/2016.
 */

@Component({
    templateUrl: "app/products/product-detail.component.html"
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    id: number;
    private sub: Subscription;
    product:IProduct;
    errorMessage:string;
    pageTitle:string;



    constructor(private _ProductService:ProductService, private _route: ActivatedRoute, private _router:Router) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(params => {
            let id = +params['id'];
            this.getProduct(id);
        });
    };

    getProduct(id: number){
        this._ProductService.getProduct(id).subscribe(
            (product) => {this.product = product},
            error => this.errorMessage = <any>error
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    onBack():void{
        this._router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }


}