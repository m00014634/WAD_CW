using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SurveyForm.Data.Migrations
{
    public partial class Question : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "QuestionId",
                table: "Surveys",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QuestionText = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Surveys_QuestionId",
                table: "Surveys",
                column: "QuestionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Surveys_Questions_QuestionId",
                table: "Surveys",
                column: "QuestionId",
                principalTable: "Questions",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Surveys_Questions_QuestionId",
                table: "Surveys");

            migrationBuilder.DropTable(
                name: "Questions");

            migrationBuilder.DropIndex(
                name: "IX_Surveys_QuestionId",
                table: "Surveys");

            migrationBuilder.DropColumn(
                name: "QuestionId",
                table: "Surveys");
        }
    }
}
