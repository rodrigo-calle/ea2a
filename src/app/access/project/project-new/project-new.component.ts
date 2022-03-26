import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }
  newProjectForm = this.fb.group({
    nombre: ['', Validators.required],
    ubicacion: ['', Validators.required],
    numero: ['', Validators.required],
  })

  __onSubmit() {
    if(this.newProjectForm.valid){
      console.log(this.newProjectForm.value);
    } else {
      alert("Campos requeridos")
    }

  }

  ngOnInit(): void {
  }

}
