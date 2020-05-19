import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Soccer } from '../model/soccer';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { soccerArr } from '../model/soccer-Data';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sorter : MatSort;

  displayedCol: string[] = ['id', 'name', 'city', 'address'];
  soccer: Soccer;
  dataSource : MatTableDataSource<Soccer>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(soccerArr);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sorter;
    this.dataSource.paginator = this.paginator;
  }
  filter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }
}
