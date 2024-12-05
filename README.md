# Expense Tracker with Budget Alerts

## Description

This web application allows users to track their expenses and get notified when they exceed a predefined monthly budget. It features the ability to add, view, and delete expenses, categorize them (e.g., Food, Transport, Entertainment), and set a monthly budget with a progress bar displaying the remaining budget.

---

## Features

- **Add, View, and Delete Expenses**: Users can manage their expenses by adding, viewing, and deleting them from the list.
- **Categorize Expenses**: Expenses can be categorized into types such as "Food", "Transport", "Entertainment", etc.
- **Set a Monthly Budget**: Users can define a monthly budget and track their spending against it.
- **Progress Bar for Budget**: A dynamic progress bar that shows the remaining budget, updating in real-time as expenses are added.
- **Notifications**: Alerts the user when their total expenses exceed the monthly budget.

---

## Technologies Used

- **Frontend**: Angular 18
- **Backend**: .NET 8
- **Database**: SQL Server

---

## Prerequisites

- **Node.js** (for running the Angular frontend)
- **Angular CLI** (for managing Angular projects)
- **.NET 8 SDK** (for the backend API)
- **SQL Server** (for the database)

---

## Installation Instructions

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/DidiDouae/Expense-Tracking-app
```

### 2. Install Frontend Dependencies
Navigate to the frontend folder and install the required dependencies using npm:
```bash
cd expense-tracker-front
npm install
```
###  3. Install Backend Dependencies
Navigate to the backend folder and install the required dependencies using the .NET CLI:

```bash
cd ExpenseTrackerAPI
dotnet restore
```

### 4. Set Up the Database
Ensure that SQL Server is installed and running. You will need to create a database for your application. You can configure your database connection in the appsettings.json file in the backend.

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=ExpenseTrackerDb;User Id=sa;Password=yourpassword;"
  }
}
```
### 5. Run the Backend API
Run the backend API using the .NET CLI:

```bash

cd ExpenseTrackerAPI
dotnet run
```
This will start the API server, typically at http://localhost:5014.

### 6. Run the Frontend
To run the frontend Angular application, navigate to the frontend folder and use the Angular CLI:

``` bash

cd expense-tracker-front
ng serve
```
The application will be available at http://localhost:4200.
