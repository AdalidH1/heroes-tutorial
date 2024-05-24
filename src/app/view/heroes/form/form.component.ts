import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from "./validators/password-validator";
import { phoneValidator } from './validators/phone-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hero = { id: "1", name: "AA" };
  formGroup!: FormGroup;
  value = 'hola';
  hide = true;

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, phoneValidator()]],
      password: ["", [Validators.required, passwordValidator()]],
    });
  }

  get f() {
    return this.formGroup.controls;
  }
  submit(){
    console.log(this.formGroup.value)
  }
}