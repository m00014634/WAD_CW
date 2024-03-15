using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;
using RequiredAttribute = System.ComponentModel.DataAnnotations.RequiredAttribute;

namespace SurveyForm.Models
{
    public class Survey
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Title of the survey us required")]
        public string Title { get; set; }
        public string Description { get; set; }
        public int? QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public Question? Question { get; set; }
    }
}
