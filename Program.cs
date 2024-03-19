//ID:00014634
using Microsoft.EntityFrameworkCore;
using QuestionForm.Repositories;
using SurveyForm.Data;
using SurveyForm.Repositories;


var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options =>

{

    options.AddPolicy(MyAllowSpecificOrigins,

               policy =>

               {

                   policy.WithOrigins("http://localhost:4200")

                           .AllowAnyHeader()

                           .AllowAnyMethod()

                           .AllowAnyOrigin();

               });

});


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<SurveyFormDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("SurveyFormConnectionStr")));

builder.Services.AddScoped<ISurveysRepository, SurveysRepository>();
builder.Services.AddScoped<IQuestionsRepository, QuestionsRepository>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
//ID:00014634
