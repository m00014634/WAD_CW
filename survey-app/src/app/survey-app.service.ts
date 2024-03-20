import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SurveyFormItems } from './SurveyFormItems';

@Injectable({
  providedIn: 'root'
})
export class SurveyAppService {
  httpClient = inject(HttpClient)
  constructor() { }
  getAll() {
    return this.httpClient.get<SurveyFormItems[]>("https://localhost:7071/api/Surveys/GetSurveys");
  }
  getAllQuestions() {
    return this.httpClient.get("https://localhost:7071/api/Questions/GetQuestions");
  }
  createItem(item: any) {
    return this.httpClient.post("https://localhost:7071/api/Surveys/PostSurvey", item);
  }

  getById(id: number) {
    return this.httpClient.get<SurveyFormItems>("https://localhost:7071/api/Surveys/GetSurvey/" + id)
  }
  edit(item: SurveyFormItems) {
    return this.httpClient.put("https://localhost:7071/api/Surveys/PutSurvey", item);
  };
  delete(id:number){
    return this.httpClient.delete("https://localhost:7071/api/Surveys/DeleteSurvey"+id);
  };

}
