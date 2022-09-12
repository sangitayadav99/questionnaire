import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-questionnarie',
  templateUrl: './questionnarie.component.html',
  styleUrls: ['./questionnarie.component.scss']
})
export class QuestionnarieComponent implements OnInit {

  @Output() public ageChange: EventEmitter<string>;
  public formGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.ageChange = new EventEmitter<string>();
    this.formGroup = this.buildForm();
  }

  ngOnInit() {
  }

  public onChange(): void {
    const value = this.formGroup.get('ageBetween').value;
    this.ageChange.emit(value);
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      ageBetween: ['', [Validators.required]]
    })
  }

}
