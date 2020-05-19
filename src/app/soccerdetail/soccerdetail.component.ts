import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Soccer } from '../model/soccer';
import { SoccerService } from '../model/soccer.service';

@Component({
  selector: 'app-soccerdetail',
  templateUrl: './soccerdetail.component.html',
  styleUrls: ['./soccerdetail.component.css']
})
export class SoccerdetailComponent implements OnInit {

  soccer$: Observable<Soccer>;
  soccer: Soccer;
  imagePath = "../assets/";

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private soccerService: SoccerService) { }


  ngOnInit(): void {
    /*this.soccer$ = this.activatedRoute.paramMap.pipe(
   switchMap((param: ParamMap) => this.soccerService.getSoccer(param.get('id')))
 );*/
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.soccer = this.soccerService.getSoccer(id);
    this.imagePath = this.imagePath + this.soccerService.getSoccer(id).photo
  };

  findPage() {
    this.router.navigate(['/find']);
  }

}
