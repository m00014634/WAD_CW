export interface SurveyFormItems{
    id:number,
    title:string,
    description:string
    questionID:number,
    question:{
        id:number,
        questionText:string
    }
}