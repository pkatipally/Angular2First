/**
 * Created by RJK on 9/30/2016.
 */
import {PipeTransform, Pipe} from "@angular/core";
import {IProduct} from "./product";

@Pipe({
    name:'productFilter'
})
export class ProductFilterPipe implements PipeTransform{
    transform(value:IProduct[], args: string) : IProduct[]{
        console.log(args);
        let filter:string = args?args.toLocaleLowerCase():null;
        return filter ? value.filter((product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }

}