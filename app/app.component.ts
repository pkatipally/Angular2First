/**
 * Created by RJK on 9/29/2016.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'my-app',
    template: `<div>
            <div><products></products></div>
            </div>`

})
export class AppComponent {
    pageTitle: string = "Product Management";
}
