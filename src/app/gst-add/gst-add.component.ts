import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helper/must-match.validators';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  validator=false;
  constructor(private formBuilder: FormBuilder,private fs:FormService,private router: Router) {
    this.createForm();
   }

   createForm(){
    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
}
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
}
addForm(firstName,lastName,email,password,confirmPassword){
  this.fs.addForm(firstName,lastName,email,password,confirmPassword);
    if(this.submitted){
      this.router.navigate(['form']);
    }
  }
 ngOnInit() {}


}
