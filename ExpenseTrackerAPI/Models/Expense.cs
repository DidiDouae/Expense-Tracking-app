namespace ExpenseTrackerAPI.Models
{
    public class Expense
    {
        public int Id { get; set; } // Primary Key
        public string Name { get; set; } // Name of the expense
        public decimal Amount { get; set; } // Amount spent
        public string Category { get; set; } // Expense category
        public DateTime Date { get; set; } // Date of the expense
    }
}