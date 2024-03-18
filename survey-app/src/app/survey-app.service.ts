import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SurveyFormItems } from './SurveyFormItems';

@Injectable({
  providedIn: 'root'
})
export class SurveyAppService {
  httpClient = inject(HttpClient)
  constructor() { }
  getAll(){
    return this.httpClient.get<SurveyFormItems[]>("https://localhost:7071/api/Surveys/GetSurveys");
 } 
}
