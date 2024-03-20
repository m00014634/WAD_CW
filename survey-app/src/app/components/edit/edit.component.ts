import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyAppService } from '../../survey-app.service';
import { SurveyFormItems } from '../../SurveyFormItems';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})



export class EditComponent {
  surveyService = inject(SurveyAppService); // Service to get and send data from and to the API
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editSurvey: SurveyFormItems = {
    id: 0,
    title: "",
    description: "",
    questionID: 0,
    question: {
      id: 0,
      questionText: ""
    }
  };
  questionObject: any; // Category Object for listing
  selected: any // if any selected by default
  qID: number = 0;// category ID To inject to
  ngOnInit() {
    this.surveyService.getById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.editSurvey = result;
      this.selected = this.editSurvey.questionID;
    });
    this.surveyService.getAllQuestions().subscribe((result) => {
      this.questionObject = result;
    });
  }

  toHome() {
    this.router.navigateByUrl("home")
  }

  edit() {
    this.editSurvey.questionID = this.qID;
    this.editSurvey.question = this.questionObject[findIndexByID(this.questionObject, this.qID)];
    this.surveyService.edit(this.editSurvey).subscribe(res=>{
      alert("Changes has been updated")
      this.router.navigateByUrl("home");
    })
  }
}
