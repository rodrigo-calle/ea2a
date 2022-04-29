import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects : any = [];
  apartments : any = [];

  constructor(
    private readonly ps: ProjectService,
    private readonly as: ApartmentService,
    private ar: ActivatedRoute
  ) { }

  __obtenerProyectos(idproyecto: number) {
    this.ps.__getProjects().subscribe((rest: any) => {
      this.projects = rest.data.filter((item : { id: number}) => item.id == idproyecto);
    })
  }

  __obtenerDepartamentos(idproyecto: number) {
    this.as.__getApartments().subscribe((rest: any) => {
      this.apartments = rest.data.filter((item: {projectId: number})=> item.projectId == idproyecto);
      console.log(this.apartments)
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((p: Params) => {
      if(p["id"]) {
        this.__obtenerProyectos(p["id"]);
        this.__obtenerDepartamentos(p["id"]);
        console.log(this.apartments)
      }
    })
    //this.__obtenerProyectos(2);
  }

}
