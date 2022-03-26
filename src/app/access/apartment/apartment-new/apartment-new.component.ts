import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apartment-new',
  templateUrl: './apartment-new.component.html',
  styleUrls: ['./apartment-new.component.css']
})
export class ApartmentNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  newApartmentForm = this.fb.group({
    tipo: ['', Validators.required],
    nombre: ['', Validators.required],
    area: ['', Validators.required],
    piso: ['', Validators.required],
  })

  __onSubmit() {

      console.log(this.newApartmentForm.value);

  }
  ngOnInit(): void {
  }

}
