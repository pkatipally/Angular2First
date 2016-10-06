/**
 * Created by RJK on 9/29/2016.
 */
import {Component} from "@angular/core";

import {ProductService} from "./products/product.service";
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers:[ProductService]
})
export class AppComponent {
    pageTitle: string = "Product Management";
}

