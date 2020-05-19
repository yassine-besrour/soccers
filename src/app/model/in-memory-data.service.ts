import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Soccer } from './soccer';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb()  {
    const soccerList = [
      { id:1,name:"Maracana",city:"Aouina",address:"10 street mehary",description:"Welcome to our new Maracan Soccer",photo:"maracana.jpg"},
      { id:2,name:"FreeFoot",city:"Rades",address:"15 street choucha",description:"Welcome to our new Free Foot Soccer",photo:"freefoot.jpg"},
      { id:3,name:"Foot Houmti",city:"Ben arous",address:"8 street kimbala",description:"Welcome to our Houmti Soccer",photo:"houmti.jpg"},
      { id:4,name:"Zo7al",city:"Nabeul",address:"18 street lemhef",description:"Welcome to our new Maracan Zo7al",photo:"maracana.jpg"},
      { id:5,name:"Juventus",city:"Jerba",address:"199 street bougornine",description:"Welcome to our new Juventus soccer club",photo:"freefoot.jpg"},
      { id:6,name:"FC FORBS",city:"Ezzahra",address:"1254 street hannibal",description:"Welcome to our FC FORBS Soccer",photo:"houmti.jpg"}
    ] ;
    
    return {soccerList};
  }
}
