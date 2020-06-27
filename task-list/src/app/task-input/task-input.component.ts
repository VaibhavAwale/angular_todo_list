import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})

export class TaskInputComponent implements OnInit {

  taskInputForm = new FormGroup({
    taskInput: new FormControl('', Validators.required),
    taskLabel: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  clearInput() {
    this.taskInputForm.setValue({
      taskInput: '',
      taskLabel: '',
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.taskInputForm.value);
    this.clearInput();
  }

}
