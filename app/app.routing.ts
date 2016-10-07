import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductListComponent} from "./products/product-list.component";
import {ProductDetailComponent} from "./products/product-detail.component";
/**
 * Created by RJK on 10/6/2016.
 */

const appRoots: Routes = [
    {path:'', redirectTo:'welcome', pathMatch: 'full'},
    {path:'welcome', component:WelcomeComponent},
    {path:'products', component:ProductListComponent},
    {path:'product', component:ProductDetailComponent},
    {path:'product/:id', component: ProductDetailComponent}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoots);