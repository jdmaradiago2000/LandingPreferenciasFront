import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./components/content/content.component";
import { SurveyComponent } from "./views/survey.component";


const app_routes: Routes = [
    {path: 'survey', component: SurveyComponent},
    {path: 'content', component: ContentComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'content'}
];

export const app_routing = RouterModule.forRoot(app_routes);