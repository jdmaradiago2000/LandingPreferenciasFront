import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./components/content/content.component";
import { Etapa1Component} from "./views/etapa1/etapa1.component";
import { Etapa2Component } from "./views/etapa2/etapa2.component";
import { Etapa3Component } from "./views/etapa3/etapa3.component";


const app_routes: Routes = [
    {path: 'etapa1', component: Etapa1Component},
    {path: 'etapa2', component: Etapa2Component},
    {path: 'etapa3', component: Etapa3Component},
    {path: 'content', component: ContentComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'content'}
];


export const app_routing = RouterModule.forRoot(app_routes);