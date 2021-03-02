import { Component, OnInit } from '@angular/core';
import Form from '../Form';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  forms:Form[];
  constructor(private fs:FormService,private router:Router) { }

  deleteForm(_id){
    this.fs.deleteForm(_id).subscribe(res => {
      this.router.navigate(['/form']);
	  
    })
  }
  ngOnInit() {
    this.fs.getForms().subscribe((data: Form[]) => {
      this.forms=data;
    });
	
  }

}
