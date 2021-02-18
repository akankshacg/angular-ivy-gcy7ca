import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import {AboutComponent} from './about/about.component'
import {PersonalDetailsComponent} from './personal-details/personal-details.component'
import {ContactDetailsComponent} from './contact-details/contact-details.component'
import {SkillsComponent} from './skills/skills.component'
import {WorkExperienceComponent} from './work-experience/work-experience.component'
import {WizardFinishedComponent} from './wizard-finished/wizard-finished.component'

const routes: Routes = [
  {path:"dashboard",component: DashboardComponent},
  {path: "about",component:AboutComponent},
  {path:"PersonalDetails",component:PersonalDetailsComponent},
  {path: "ContactDetails",component:ContactDetailsComponent},
  {path:"Skills",component:SkillsComponent},
  {path: "WorkExperience",component:WorkExperienceComponent},
  {path: "WizardFinished",component:WizardFinishedComponent},
  {path: "",redirectTo:"PersonalDetails",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
