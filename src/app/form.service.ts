import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  uri = 'http://localhost:4000/form';
  constructor(private http: HttpClient) { }
  
  addForm(firstName,lastName,email,password,confirmPassword){
    const obj={
      firstName: firstName,
      lastName:lastName,
      email:email,
      password:password,
      confirmPassword:confirmPassword
    };
    console.log(obj);
   // console.log(`${this.uri}`);
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));
  }
  getForms() {
    return this.http.get(`${this.uri}`);
  }
  editForm(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
    }
    // update form
  updateForm(firstName,lastName,email,password,confirmPassword, id){
      const obj={
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value,
        confirmPassword:confirmPassword.value
      }
      this.http.post(`${this.uri}/update/${id}`,obj).subscribe(res=> console.log('done'));
    }

    //delete record
    deleteForm(id){
      return this.http.get(`${this.uri}/delete/${id}`);
    }
}
