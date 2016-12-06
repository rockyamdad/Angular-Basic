import {Routes ,RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";

const APP_ROUTE:Routes = [
    {path:'', component: HomeComponent},
    {path:'contact', component: ContactComponent},
];

export const ROUTE = RouterModule.forRoot(APP_ROUTE);