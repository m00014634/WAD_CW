import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyAppService } from '../../survey-app.service';
import { SurveyFormItems } from '../../SurveyFormItems';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  deleteSurvey: SurveyFormItems = {
    id: 0,
    title: "",
    description: "",
    questionID: 0,
    question: {
      id: 0,
      questionText: ""
    }

  }
  service = inject(SurveyAppService)
  activateRote = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit() {
    this.service.getById(this.activateRote.snapshot.params["id"]).subscribe((result) => {
      this.deleteSurvey = result
    });
  }

  onHomeButtonClick() {
    this.router.navigateByUrl("home")
  }
  onDeleteButtonClick(id: number) {
    console.log(this.deleteSurvey.id);
    this.service.delete(this.deleteSurvey.id);
    alert("Deleted  item with ID: " + id)
    this.router.navigateByUrl("home")
  }
}


