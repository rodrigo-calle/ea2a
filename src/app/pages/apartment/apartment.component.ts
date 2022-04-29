import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  apartments : any = [];
  project : any = [];
  proyectoId: any = 0;

  constructor(
    private readonly ap: ApartmentService,
    private readonly ps: ProjectService,
    private ar: ActivatedRoute
  ) { }

  __obtenerApartamento(iddepartamento: number){
    this.ap.__getApartments().subscribe((rest: any) => {
      this.apartments = rest.data.filter((item: {id: number}) => item.id == iddepartamento);

      console.log(this.apartments)
      //this.proyectoId = this.apartments[0]?.projectId;
    })

  }

  __obtenerProyecto(idproyecto: number){
    this.ps.__getProjects().subscribe((rest: any) => {
      this.project = rest.data.filter((item: {id: number}) => item.id == idproyecto);
      console.log( rest.data)
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((p: Params) => {
      if(p["idproyecto"] && p["iddepartamento"]) {
        this.__obtenerProyecto(p["idproyecto"]);
        this.__obtenerApartamento(p["iddepartamento"]);
      }
    })

  }

}
