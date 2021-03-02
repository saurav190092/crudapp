import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../form.service';
@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {
  form:any={};
  registerForm:FormGroup;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private fs:FormService,
    private fb:FormBuilder ) {
    this.createForm();
  }
  createForm(){
    this.registerForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    });
  }
  
  updateForm(firstName,lastName,email,password,confirmPassword){
    this.route.params.subscribe(params=>{
      this.fs.updateForm(firstName,lastName,email,password,confirmPassword, params['id']);
      this.router.navigate(['form']);
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.fs.editForm(params['id']).subscribe(res=>{
        this.form=res;
      });
    });
  }

}
