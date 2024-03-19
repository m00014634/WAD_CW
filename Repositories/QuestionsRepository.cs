//ID:00014634
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
        public async Task CreateQuestion(Question question)
        {
            await _dbContext.Questions.AddAsync(question);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteQuestion(int id)
        {
            var question = await _dbContext.Questions.FirstOrDefaultAsync(q => q.Id == id);
            if (question != null)
            {
                _dbContext.Questions.Remove(question);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task UpdateQuestion(Question question)
        {
            _dbContext.Entry(question).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

    }
}
//ID:00014634
