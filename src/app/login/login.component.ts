import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup; 
  returnUrl : string;
  isSubmitted : boolean;
  hide : boolean = true;
  constructor(private fb : FormBuilder, 
              private auth:AuthService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({username:[''], password:['']});
    this.auth.logout();
    this.activatedRoute.queryParams.subscribe((params) => {
      this.returnUrl = params['returnUrl'];
    });
  }
  get f(){ return this.loginForm.controls;}

  onSubmit(){
    
    this.isSubmitted= true;
    
    this.auth.login(this.f.username.value,this.f.password.value)
    .subscribe( data => {      
      this.router.navigate([this.returnUrl]) ;
      console.log('returnUrl : '+ this.returnUrl) ;
    },
    error => {
      console.log(error);
    });
  }

}
