import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApartmentListComponent } from "./access/apartment/apartment-list/apartment-list.component";
import { ApartmentNewComponent } from "./access/apartment/apartment-new/apartment-new.component";
import { ProjectListComponent } from "./access/project/project-list/project-list.component";
import { ProjectNewComponent } from "./access/project/project-new/project-new.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { HomeComponent } from "./pages/home/home.component";
import { TeamComponent } from "./pages/team/team.component";
import { ProjectComponent } from "./pages/project/project.component";
import { ApartmentComponent } from "./pages/apartment/apartment.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'team', component: TeamComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'apartment/:idapartment', component: ApartmentComponent},
  { path: 'apartment/:idproyecto/:iddepartamento', component: ApartmentComponent},

  //rutas protegidas
  { path: 'admin/project/new', component:ProjectNewComponent },
  { path: 'admin/project/list', component: ProjectListComponent},
  { path: 'admin/apartment/list', component: ApartmentListComponent},
  { path: 'admin/apartment/new', component: ApartmentNewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
console.log(AppRoutingModule)
