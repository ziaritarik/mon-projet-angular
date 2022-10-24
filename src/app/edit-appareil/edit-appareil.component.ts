import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {
  defaultOnOff="éteint";
  constructor() { }

  ngOnInit(): void {
  }
  ngSubmit(form:NgForm){
    console.log(form.value.status);
    console.log(form.value['status']);
    const name=form.value['name'];
    const status=form.value['status'];
  }
}
