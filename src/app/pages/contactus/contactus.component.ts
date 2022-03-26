import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  contactusForm = this.fb.group({
    persona: this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
    }),
    correo: [''],
    mensaje: ['', Validators.required]
  })

  __onSubmit() {
    console.log(this.contactusForm.value);
  }


  ngOnInit(): void {
  }

}
