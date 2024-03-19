//ID:00014634
using Microsoft.EntityFrameworkCore;
using SurveyForm.Models;

namespace SurveyForm.Data
{
    public class SurveyFormDbContext : DbContext
    {
        public SurveyFormDbContext(DbContextOptions<SurveyFormDbContext> options) : base(options) { }
        public DbSet<Survey> Surveys { get; set; }
        public DbSet<Question> Questions { get; set; }

    }
}
//ID:00014634
