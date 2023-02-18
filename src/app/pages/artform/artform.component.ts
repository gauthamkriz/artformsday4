import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-artforms',
  templateUrl: './artform.component.html',
  styleUrls: ['./artform.component.css']
})
export class ArtformComponent  {
  artforms=data
  ngOninit():void{
    this.artforms=data
  }
  constructor(private router: Router) { }
 
  goToNextPage(id:any){
    
    localStorage.setItem('id',id);
    this.router.navigate(['/singlepage']);
  
  }
}