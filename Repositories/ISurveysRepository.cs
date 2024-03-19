//ID:00014634
using SurveyForm.Models;

namespace SurveyForm.Repositories
{
    public interface ISurveysRepository
    {
        Task<IEnumerable<Survey>> GetAllSurveys();
        Task <Survey> GetSingleSurvey(int id);
        Task CreateSurvey(Survey survey);
        Task UpdateSurvey(Survey survey);
        Task DeleteSuryey(int id);
    }
}
//ID:00014634
