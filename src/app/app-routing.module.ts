import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from 'src/components/programs/programs.component';

const routes: Routes = [
  {path:'Programs',component:ProgramsComponent},
  {path:"",redirectTo:'Programs',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
