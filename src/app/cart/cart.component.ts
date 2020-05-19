import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  bookingForm: FormGroup;
  selectedHour;
  hours = [
    { id: 1, hour: '17-18' },
    { id: 2, hour: '18-19' },
    { id: 3, hour: '19-20' },
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      dateMatch: [''],
      hourMatch: [''],
      email: ['', [Validators.required,Validators.email ]],
      comment: ['']
    });
  }
  get f() { return this.bookingForm.controls; }

  onSubmit() {
    console.log('hour : ' + this.f.hourMatch.value);
  }

  getErrorEmailMessage(){
    if (this.f.email.errors.required) 
      return "You must enter a value";
    if (this.f.email.errors.email) 
      return  "Not a valid email ";
    
  }

}
