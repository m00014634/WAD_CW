using Microsoft.EntityFrameworkCore;
using SurveyForm.Data;
using SurveyForm.Models;
using SurveyForm.Repositories;

namespace QuestionForm.Repositories
{
    public class QuestionsRepository : IQuestionsRepository
    {
        private readonly SurveyFormDbContext _dbContext;

        public QuestionsRepository(SurveyFormDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task <IEnumerable<Question>> GetAllQuestions()
        {
             var questions = await _dbContext.Questions.ToListAsync();
             return questions;
        }

        public async Task<Question> GetSingleQuestion(int id)
        {
            return await _dbContext.Questions.FirstOrDefaultAsync(q => q.Id == id);

        }
        public async Task CreateQuestion(Question survey)
        {
            await _dbContext.Questions.AddAsync(survey);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteQuestion(int id)
        {
            var survey = await _dbContext.Questions.FirstOrDefaultAsync(q => q.Id == id);
            if (survey != null)
            {
                _dbContext.Questions.Remove(survey);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task UpdateQuestion(Question survey)
        {
            _dbContext.Entry(survey).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

    }
}
