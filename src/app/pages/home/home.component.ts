import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects : any = [];

  constructor(
    private readonly ps: ProjectService
  ) { }

  __obtenerProyectos() {
    this.ps.__getProjects().subscribe((rest: any) => {
      this.projects = rest.data;
    })
  }
  ngOnInit(): void {
    this.__obtenerProyectos();
  }

}
