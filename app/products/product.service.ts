/**
 * Created by RJK on 10/6/2016.
 */
import {IProduct} from "./product";
import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Http, Response} from "@angular/http";

@Injectable()
export class ProductService {
    private _productUrl = "app/data/products.json";

    constructor(private _http: Http) {
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log("error");
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
