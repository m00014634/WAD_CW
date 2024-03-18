import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { SurveyFormItems } from '../../SurveyFormItems';
import {MatButtonModule} from '@angular/material/button';
import { SurveyAppService } from '../../survey-app.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule,MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  itemlist:SurveyFormItems[]=[];
  surveyformService=inject(SurveyAppService)
  ngOnInit(){
    this.surveyformService.getAll().subscribe((result)=>{
      this.itemlist=result;
    });
  }

  displayedColumns: string[] = ['ID', 'Title', 'Description', 'Question Text','Actions'];
  c(){
    console.log("Create")
    this.router.navigateByUrl("create")
  };
  e(id:number){
    console.log("edit",id)
    this.router.navigateByUrl("edit/"+id)
    
  };
  dt(id:number){
    console.log("details",id)
    this.router.navigateByUrl("details/"+id)

  };
  dl(id:number){
    console.log("delete",id)
    this.router.navigateByUrl("delete/"+id)
  };
}

