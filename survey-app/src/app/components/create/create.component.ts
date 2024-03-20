import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyAppService } from '../../survey-app.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatChipsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})

export class CreateComponent {
  serviceSurvey = inject(SurveyAppService)
  router = inject(Router)
  questions:any
  
  itemsToCreate:any = {
    title:"",
    description:"",
    questionId:0
  }

  selectedQuestionID:number = 0


  ngOnInit(){
    this.serviceSurvey.getAllQuestions().subscribe(result=>{
      this.questions = result
      console.log(this.questions)
    });
  }

  onCreateBtn(){
    this.itemsToCreate.questionId = this.selectedQuestionID
    this.serviceSurvey.createItem(this.itemsToCreate).subscribe(result=>{
      alert("Created")
      this.router.navigateByUrl("home")
    });
  }


}
