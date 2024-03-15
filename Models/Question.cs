using RequiredAttribute = System.ComponentModel.DataAnnotations.RequiredAttribute;

namespace SurveyForm.Models
{
    public class Question
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Question text is required")]

        public string QuestionText { get; set; }
    }
}
