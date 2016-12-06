import {Routes ,RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {CoursesComponent} from "./courses/courses.component";
import {CourseListComponent} from "./courses/course-list/course-list.component";

const APP_CHILD = [
    {path:'',component:CoursesComponent},
    {path:'',component:CourseListComponent, outlet:'sidebar'}
];
const APP_ROUTE:Routes = [
    {path:'', component: HomeComponent},
    {path:'contact', component: ContactComponent},
    {path:'courses', children:APP_CHILD},
];

export const ROUTE = RouterModule.forRoot(APP_ROUTE);