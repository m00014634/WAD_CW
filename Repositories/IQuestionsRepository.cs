using SurveyForm.Models;

namespace SurveyForm.Repositories
{
    public interface IQuestionsRepository
    {
        Task<IEnumerable<Question>> GetAllQuestions();
        Task <Question> GetSingleQuestion(int id);
        Task CreateQuestion(Question question);
        Task UpdateQuestion(Question question);
        Task DeleteQuestion(int id);
    }
}
