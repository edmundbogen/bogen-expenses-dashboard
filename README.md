# Bogen Family Expenses Dashboard

A password-protected, interactive web dashboard for tracking and visualizing family expenses.

## Features

- **Password Protection**: Secure access with session-based authentication
- **Interactive Dashboard**: Key metrics, charts, and summary tables
- **Transaction Management**: Sortable, searchable, paginated transaction table
- **Filtering**: Filter by month, person, category, date range, and search
- **Person Analysis**: Detailed spending breakdown by family member
- **Category Analysis**: Spending breakdown by expense category
- **Debt Tracker**: Monitor debt accounts, balances, and interest payments
- **Responsive Design**: Works on desktop and mobile devices

## Running Locally

### Option 1: Direct File Open
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
Using Python:
```bash
cd /Users/edmundbogen/Desktop/bogen-expenses-dashboard
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

### Option 3: Node.js Server
```bash
npx serve .
```

## Deploying to Static Hosting

This dashboard can be deployed to any static hosting service:

- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Connect your GitHub repo or drag and drop

## Adding New Monthly Data

### Step 1: Update the data.js file

Open `data.js` and locate the `transactions` array. Add new transactions in this format:

```javascript
{
  "date": "2025-12-15",        // YYYY-MM-DD format
  "description": "EXAMPLE STORE",
  "category": "Groceries",
  "amount": 125.50,
  "person": "Edmund",          // Edmund, Sam, Sophie, or Chloe
  "source": "Chase Bank"
}
```

### Step 2: Update metadata

In the same `data.js` file, update:

```javascript
"metadata": {
  "family": "Bogen Family",
  "year": 2025,
  "lastUpdated": "2025-12-23",  // Update this date
  "dataMonths": ["2025-11", "2025-12"]  // Add new months
}
```

### Step 3: Update debt accounts (if balances changed)

Update the `debtAccounts` array with new balances and interest:

```javascript
"debtAccounts": [
  {
    "account": "Rushmore Mortgage",
    "type": "Mortgage",
    "interestPaid": 829.45,    // This month's interest
    "balance": 274000.00,      // Updated balance
    "interestRate": 0.03625,
    "notes": "17657 Foxborough Ln, Boca Raton"
  },
  // ... other accounts
]
```

### Step 4: Update summary totals

Recalculate and update:

```javascript
"summary": {
  "totalExpenses": 35000.00,   // Sum of all transaction amounts
  "totalInterest": 2091.63,    // Sum of all interest paid
  "totalDebt": 345000.00       // Sum of all balances
}
```

## JSON Data Structure Reference

```javascript
const EXPENSE_DATA = {
  metadata: {
    family: "Bogen Family",
    year: 2025,
    lastUpdated: "2025-12-23",
    dataMonths: ["2025-11"]
  },
  summary: {
    totalExpenses: 32549.84,
    totalInterest: 2091.63,
    totalDebt: 345598.02
  },
  transactions: [
    {
      date: "2025-11-15",
      description: "Description here",
      category: "Category Name",
      amount: 100.00,
      person: "Edmund",
      source: "Source Name"
    }
  ],
  debtAccounts: [
    {
      account: "Account Name",
      type: "Credit Card",
      interestPaid: 100.00,
      balance: 5000.00,
      interestRate: 0.1999,
      notes: "Optional notes"
    }
  ],
  personSummary: [
    {
      name: "Edmund",
      totalSpent: 18603.42,
      percentOfFamily: 0.5715,
      numTransactions: 120,
      avgTransaction: 155.03
    }
  ],
  categoryAnalysis: [
    {
      category: "Category Name",
      amount: 1000.00,
      percent: 0.05
    }
  ]
};
```

## Categories Used

The following categories are used in the data:
- Auto - Car Payment
- Bar & Cafe
- Cable & Internet Comm
- Charities
- Clothing Stores
- Computer Supplies
- Country Club
- Dining
- Dining/Bar
- Education
- Entertainment
- Fees & Adjustments
- Fitness
- Florists & Garden
- Food Delivery
- Fuel
- Furnishing
- Gas
- General Events
- General Retail
- Government Services
- Groceries
- Health Care - Physical Therapy
- Health Care Services
- Health Insurance
- Household Help
- Housing - Mortgage
- Insurance
- Internet Purchase
- Internet Services
- Laundry
- Lodging
- Mail Order
- Miscellaneous
- Mobile Telecom
- Office Supplies
- Other Services
- Parking Charges
- Personal Care
- Pharmacies
- Pharmacy
- Professional Services
- Recreation
- Restaurant
- Rideshare
- Services
- Shopping
- Software
- Software/Subscriptions
- Streaming/Entertainment
- Subscriptions
- Taxis & Coach
- Theatrical Events
- Transportation - Tolls
- Travel - Flights
- Travel - Hotel
- Utilities - Electric
- Utilities - Water
- Wholesale Stores

## Security Note

The password protection is client-side only and is NOT secure for sensitive financial data on a public server. For production use:

1. Use server-side authentication
2. Enable HTTPS
3. Consider using a proper authentication service

## License

Private - Bogen Family Use Only
