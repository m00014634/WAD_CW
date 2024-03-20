import { Component,inject,OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { SurveyAppService } from '../../survey-app.service';
import { SurveyFormItems } from '../../SurveyFormItems';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule,MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
 
  item: SurveyFormItems = {
    id: 0,
    title: "",
    description: "",
    questionID: 0,
    question: {
      id: 0,
      questionText: ""
    }
  };

  serviceSurvey = inject(SurveyAppService)
  activatedRoute = inject(ActivatedRoute)
  
  ngOnInit() {
    this.serviceSurvey.getById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.item = result
    });
  }
}
