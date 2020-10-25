import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TestLogic } from 'src/app/shared/models/testlogic';
import { TestlogicService } from '../../masters/services/testlogic.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MasterTypeService } from '../../cfs/services/master-type.service';
import { TimeSlot } from 'src/app/shared/models/timeslot';
import { FormErrorStateMatcher } from './../../../shared/matchers/error.matcher';
@Component({
  selector: 'app-testlogic',
  templateUrl: './testlogic.component.html',
  styleUrls: ['./testlogic.component.scss']
})
export class TestlogicComponent implements OnInit {
  errorStateMatcher = new FormErrorStateMatcher();
  public testForm: FormGroup;
  public minDate: Date;
  public maxDate: Date;
  public timeSlots: Array<any> = [];

  constructor(
    private _testService: TestlogicService,
    private _alertService: AlertService,
    private _snackBar: MatSnackBar,
    private _masterTypeService: MasterTypeService,

  ) { 

  

  }

  ngOnInit(): void {
    this.getAllTimeSlots();
  }
  getAllTimeSlots() {
    this._masterTypeService.getAllTimeSlotMasters().subscribe(
      (slots: TimeSlot[]) => {
        this.timeSlots = slots;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  timeSlotSelected(slotId) {

  }

  resetTestForm() {
    this.testForm.reset();
    this.testForm.markAsPristine();
  }
  submittestLogicForm(ev) {
    if (ev) {
      ev.preventDefault();
    }
    if (this.testForm.valid) {
      const test = this.transformOrderObj(this.testForm.value, 'submitted');
      this.saveTestLogic(test);
    } else {
      this._alertService.error('please review all the fields', 'Invalid Form!');
    }
  }

  saveTestLogic(testForm: any) {
    this._testService.saveTestLogic(testForm.value).subscribe(
      (res) => {
        this.openSnackBar('Success !', 'Saved Test Logic Successfully');
       
      },
      (err) => {
        console.log('err');
        this.openSnackBar('Failure !', 'Could not create Test Logic!');
      }
    );
  }





  transformOrderObj(test: any, status: string): TestLogic {
   
    
    return {
      created_on: test.created_on,
      orderdate:test.orderdate,
      created_ontime_slot : test.created_ontime_slot

    } as TestLogic;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
