using Microsoft.EntityFrameworkCore;
using ExpenseTrackerAPI.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers(); // Add controllers to the service container
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Register CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost4200", corsBuilder =>
    {
        corsBuilder.WithOrigins("http://localhost:4200")  // Allow requests from localhost:4200
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseHttpsRedirection();
}

app.UseCors("AllowLocalhost4200"); // Apply the CORS policy

// Map controllers for API endpoints
app.MapControllers();

app.Run();

// Example weather forecast data (can be removed if unused)
public record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
