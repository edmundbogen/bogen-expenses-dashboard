// Bogen Family Expenses Data
// Last updated: 2025-12-23
// 
// HOW TO ADD NEW MONTHLY DATA:
// 1. Add new transactions to the 'transactions' array below
// 2. Update 'dataMonths' array in metadata to include the new month
// 3. Update debt account balances and interest paid
// 4. Update the 'lastUpdated' date in metadata
//

const EXPENSE_DATA = {
  "metadata": {
    "family": "Bogen Family",
    "year": 2025,
    "lastUpdated": "2025-12-23",
    "dataMonths": [
      "2025-11"
    ]
  },
  "summary": {
    "totalExpenses": 32549.84,
    "totalInterest": 2091.63,
    "totalDebt": 345598.02
  },
  "transactions": [
    {
      "date": "2025-10-27",
      "description": "JETBLUE - Chloe flight LAX-PBI-FLL-LAX",
      "category": "Travel - Flights",
      "amount": 11.2,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-27",
      "description": "JETBLUE - Chloe flight LAX-PBI-LAX",
      "category": "Travel - Flights",
      "amount": 121.0,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-31",
      "description": "NORTON Antivirus",
      "category": "Software/Subscriptions",
      "amount": 59.99,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-31",
      "description": "Oscar Health Insurance",
      "category": "Health Insurance",
      "amount": 2091.82,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-06",
      "description": "ALLSTATE Health Solution",
      "category": "Health Insurance",
      "amount": 44.1,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-07",
      "description": "Peacock (Apple TV)",
      "category": "Streaming/Entertainment",
      "amount": 17.05,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-18",
      "description": "ALLSTATE Health Solution",
      "category": "Health Insurance",
      "amount": 7.34,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-20",
      "description": "NORTON Antivirus",
      "category": "Software/Subscriptions",
      "amount": 28.0,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-20",
      "description": "CHUBB Insurance",
      "category": "Insurance",
      "amount": 163.24,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-20",
      "description": "HOTWIRE",
      "category": "Travel - Hotel",
      "amount": 42.34,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-22",
      "description": "ESPN",
      "category": "Streaming/Entertainment",
      "amount": 22.74,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-25",
      "description": "OPENAI ChatGPT Subscription",
      "category": "Software/Subscriptions",
      "amount": 20.0,
      "person": "Edmund",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-25",
      "description": "Home Slice Pizza",
      "category": "Dining",
      "amount": 4.33,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-26",
      "description": "Green Light Social",
      "category": "Dining/Bar",
      "amount": 18.4,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-26",
      "description": "CorePower Yoga - Triangle",
      "category": "Fitness",
      "amount": 26.4,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-26",
      "description": "AllDay - Hyde Park",
      "category": "Dining",
      "amount": 105.82,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-26",
      "description": "Juiceland - Domain",
      "category": "Dining",
      "amount": 4.28,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-26",
      "description": "IT'SUGAR",
      "category": "Shopping",
      "amount": 29.93,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-27",
      "description": "1 Hour Film Lab",
      "category": "Services",
      "amount": 46.81,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-28",
      "description": "Kerbey Lane Cafe",
      "category": "Dining",
      "amount": 16.01,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-28",
      "description": "Michi Japanese Deli",
      "category": "Dining",
      "amount": 31.56,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-28",
      "description": "Shell Gas",
      "category": "Gas",
      "amount": 11.98,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-29",
      "description": "Foodies Corner",
      "category": "Dining",
      "amount": 14.78,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-29",
      "description": "Wash Laundry Mobile",
      "category": "Laundry",
      "amount": 15.0,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-30",
      "description": "CVS Pharmacy",
      "category": "Pharmacy",
      "amount": 4.89,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-10-31",
      "description": "Shell Gas",
      "category": "Gas",
      "amount": 26.3,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-02",
      "description": "DoorDash - Flowerchi",
      "category": "Food Delivery",
      "amount": 45.19,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-02",
      "description": "1 Hour Film Lab",
      "category": "Services",
      "amount": 46.81,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-02",
      "description": "Kerbey Lane Cafe",
      "category": "Dining",
      "amount": 27.12,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-03",
      "description": "Yogurt Planet",
      "category": "Dining",
      "amount": 4.64,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-03",
      "description": "WWW.LVINLIFE.COM",
      "category": "Shopping",
      "amount": 300.92,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-03",
      "description": "Mamaka Bowls",
      "category": "Dining",
      "amount": 12.29,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-03",
      "description": "Hopdoddy Triangle",
      "category": "Dining",
      "amount": 28.66,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-04",
      "description": "David Gichner Magic",
      "category": "Entertainment",
      "amount": 15.0,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-05",
      "description": "Shell Gas",
      "category": "Gas",
      "amount": 11.98,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-05",
      "description": "Wash Laundry Mobile",
      "category": "Laundry",
      "amount": 15.0,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-06",
      "description": "Tiger Lilly",
      "category": "Dining",
      "amount": 17.83,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-06",
      "description": "Powder Room - New",
      "category": "Dining/Bar",
      "amount": 20.57,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-07",
      "description": "Dumont's",
      "category": "Dining",
      "amount": 17.84,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-07",
      "description": "Green Light Social",
      "category": "Dining/Bar",
      "amount": 20.4,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-07",
      "description": "Green Light Social",
      "category": "Dining/Bar",
      "amount": 19.48,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-07",
      "description": "Nueces Mart",
      "category": "Shopping",
      "amount": 10.67,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-08",
      "description": "Canva Subscription",
      "category": "Software",
      "amount": 15.0,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-08",
      "description": "Shell Gas",
      "category": "Gas",
      "amount": 15.67,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-09",
      "description": "Kerbey Lane Cafe",
      "category": "Dining",
      "amount": 16.01,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-09",
      "description": "Shell Gas",
      "category": "Gas",
      "amount": 8.79,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-10",
      "description": "Target",
      "category": "Shopping",
      "amount": 8.66,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-12",
      "description": "BB's",
      "category": "Dining",
      "amount": 20.95,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-13",
      "description": "JW Marriott Austin F&B",
      "category": "Dining",
      "amount": 93.54,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-14",
      "description": "Roppolos Pizzeria",
      "category": "Dining",
      "amount": 8.66,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-14",
      "description": "Green Light Social",
      "category": "Dining/Bar",
      "amount": 10.82,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-14",
      "description": "Vulcan Gas Co",
      "category": "Entertainment",
      "amount": 20.52,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-13",
      "description": "Vulcan Gas Co",
      "category": "Entertainment",
      "amount": 20.52,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-14",
      "description": "Tarrytown Nails and Spa",
      "category": "Personal Care",
      "amount": 45.0,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-14",
      "description": "Foodies Corner",
      "category": "Dining",
      "amount": 17.97,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-14",
      "description": "Bar Partners Inc",
      "category": "Dining/Bar",
      "amount": 6.1,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-14",
      "description": "Bar Partners Inc",
      "category": "Dining/Bar",
      "amount": 4.1,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-16",
      "description": "Lou's Barton",
      "category": "Dining",
      "amount": 24.04,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-16",
      "description": "Fetii Inc",
      "category": "Rideshare",
      "amount": 5.55,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-16",
      "description": "Fetii Inc",
      "category": "Rideshare",
      "amount": 5.33,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-16",
      "description": "1 Hour Film Lab",
      "category": "Services",
      "amount": 29.22,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-15",
      "description": "Shell Gas",
      "category": "Gas",
      "amount": 15.14,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-16",
      "description": "Kung Fu Dessert",
      "category": "Dining",
      "amount": 16.24,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-16",
      "description": "Square Republic",
      "category": "Dining",
      "amount": 10.82,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-16",
      "description": "Panda Fest Austin",
      "category": "Entertainment",
      "amount": 17.28,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-16",
      "description": "Caphe.In Coffee",
      "category": "Dining",
      "amount": 10.72,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-16",
      "description": "NAYAX Amusements",
      "category": "Entertainment",
      "amount": 5.0,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-16",
      "description": "Shell Gas",
      "category": "Gas",
      "amount": 11.18,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-17",
      "description": "AMC Barton Creek",
      "category": "Entertainment",
      "amount": 23.11,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-18",
      "description": "Wash Laundry Mobile",
      "category": "Laundry",
      "amount": 15.0,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-19",
      "description": "Coca Cola Austin",
      "category": "Dining",
      "amount": 2.75,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-20",
      "description": "The Atlantic (Subscription)",
      "category": "Subscriptions",
      "amount": 89.99,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-19",
      "description": "CVS Pharmacy",
      "category": "Pharmacy",
      "amount": 32.22,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-21",
      "description": "Fetii Inc",
      "category": "Rideshare",
      "amount": 4.65,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-21",
      "description": "GoPuff",
      "category": "Food Delivery",
      "amount": 20.58,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-21",
      "description": "GoBrands Inc - FAM",
      "category": "Food Delivery",
      "amount": 1.07,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-21",
      "description": "Chocoloco",
      "category": "Dining",
      "amount": 8.65,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-22",
      "description": "Dirty Martin's Place",
      "category": "Dining",
      "amount": 9.5,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-22",
      "description": "Barton Springs (Parking)",
      "category": "Recreation",
      "amount": 17.95,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-23",
      "description": "JetBlue - Sophie flight AUS-FLL",
      "category": "Travel - Flights",
      "amount": 50.0,
      "person": "Sophie",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-12",
      "description": "ClassPass Monthly",
      "category": "Fitness",
      "amount": 49.0,
      "person": "Chloe",
      "source": "Barclays JetBlue"
    },
    {
      "date": "2025-11-23",
      "description": "Interest Charge on Pay Over Time Purchases",
      "category": "Fees & Adjustments",
      "amount": 470.18,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-22",
      "description": "NETFLIX.COM         866-579-7172        CA",
      "category": "Cable & Internet Comm",
      "amount": 28.43,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-20",
      "description": "WETRANSFER* 2FA2DE23AMSTERDAM           NL",
      "category": "Professional Services",
      "amount": 25.0,
      "person": "Chloe",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-19",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 22.48,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-19",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 37.08,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-18",
      "description": "LATE FEE",
      "category": "Fees & Adjustments",
      "amount": 29.0,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-18",
      "description": "PARKRECEIPTS.COM -V PLANO               TX",
      "category": "Parking Charges",
      "amount": 10.0,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-17",
      "description": "ADDISON COURT CLEANEBOCA RATON          FL",
      "category": "Other Services",
      "amount": 38.88,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-16",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 15.0,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-16",
      "description": "Pandora Radio       (510)451-4100       CA",
      "category": "Cable & Internet Comm",
      "amount": 4.99,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-14",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 14.78,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-12",
      "description": "TST* ROBOLIS RISTORABOCA RATON          FL",
      "category": "Restaurant",
      "amount": 43.47,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-11",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 21.6,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-11",
      "description": "WAY BEYOND BAGEL 068BOCA RATON          FL",
      "category": "Restaurant",
      "amount": 22.21,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-10",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 5.98,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-09",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 24.99,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-08",
      "description": "PET SUPERMARKET     BOCA RATON          FL",
      "category": "General Retail",
      "amount": 9.99,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-05",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 61.58,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-05",
      "description": "BHY*AEPHI 100000218 DANBURY             CT",
      "category": "Miscellaneous",
      "amount": 25.0,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-04",
      "description": "GOOGLE *YT PRIMETIME G.CO/HELPPAY#      CA",
      "category": "Internet Services",
      "amount": 12.99,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-03",
      "description": "MAGNOLIA VET CLINIC DELRAY BEACH        FL",
      "category": "Health Care Services",
      "amount": 664.02,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-02",
      "description": "CELLCONTROL         BATON ROUGE         LA",
      "category": "Computer Supplies",
      "amount": 9.95,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-02",
      "description": "GOOGLE *YOUTUBEPREMI G.CO/HELPPAY#      CA",
      "category": "Internet Purchase",
      "amount": 13.99,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-01",
      "description": "AMAZON.COM          AMZN.COM/BILL       WA",
      "category": "Internet Purchase",
      "amount": 106.0,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-01",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 12.5,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-01",
      "description": "RX BENEFITS-PRAM.COMBREA                CA",
      "category": "Employment Agencies",
      "amount": 113.09,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-01",
      "description": "TST* ROBOLIS RISTORABOCA RATON          FL",
      "category": "Restaurant",
      "amount": 47.96,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-29",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 29.99,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-28",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 37.97,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-28",
      "description": "THE AMBROSE THE AMBRSANTA MONICA        CA",
      "category": "Lodging",
      "amount": 1648.44,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-27",
      "description": "BACIO DI LATTE      Los Angeles         CA",
      "category": "Groceries",
      "amount": 18.28,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-27",
      "description": "TST* FOR THE WIN - KLOS ANGELES         CA",
      "category": "Restaurant",
      "amount": 3.98,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-26",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 41.98,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-26",
      "description": "CONSERV 650000012656LOS ANGELES         CA",
      "category": "Fuel",
      "amount": 33.23,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-26",
      "description": "CORAL TREE CAFE     LOS ANGELES         CA",
      "category": "Restaurant",
      "amount": 63.55,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-26",
      "description": "CVS/PHARMACY        LOS ANGELES         CA",
      "category": "Pharmacies",
      "amount": 10.0,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-26",
      "description": "PARKING CONCEPTS    LOS ANGELES         CA",
      "category": "Parking Charges",
      "amount": 23.0,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-26",
      "description": "SUSHI FUMI          WHollywood          CA",
      "category": "Restaurant",
      "amount": 86.34,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-26",
      "description": "TST* PIZZANA - BRENTLOS ANGELES         CA",
      "category": "Restaurant",
      "amount": 74.26,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-26",
      "description": "WWW.ACADEMYMUSEUM.ORLOS ANGELES         CA",
      "category": "General Events",
      "amount": 50.0,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-25",
      "description": "AMC SANTA MONICA 7  SANTA MONICA        CA",
      "category": "Theatrical Events",
      "amount": 49.9,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-25",
      "description": "AplPay BT*WAYMO     MOUNTAIN VIEW       CA",
      "category": "Taxis & Coach",
      "amount": 22.38,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-25",
      "description": "DIRECTV SERVICE     800-288-2020        TX",
      "category": "Mobile Telecom",
      "amount": 206.12,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-25",
      "description": "EREWHON SANTA MONICASanta Monica        CA",
      "category": "Groceries",
      "amount": 38.81,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-25",
      "description": "LADOT METER PARKING LOS ANGELES         CA",
      "category": "Government Services",
      "amount": 3.0,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-25",
      "description": "TST* ELEPHANTE 30050SANTA MONICA        CA",
      "category": "Restaurant",
      "amount": 70.22,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-24",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 40.19,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-24",
      "description": "TST* TARTINE - SANTASANTA MONICA        CA",
      "category": "Restaurant",
      "amount": 12.5,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-24",
      "description": "TST* TARTINE - SANTASANTA MONICA        CA",
      "category": "Restaurant",
      "amount": 22.51,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-24",
      "description": "TST* TARTINE - SANTASANTA MONICA        CA",
      "category": "Restaurant",
      "amount": 25.0,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-10-24",
      "description": "TST* TARTINE - SANTASANTA MONICA        CA",
      "category": "Restaurant",
      "amount": 165.97,
      "person": "Edmund",
      "source": "Edmund Amex Platinum"
    },
    {
      "date": "2025-11-24",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 121.33,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-24",
      "description": "VENCHI AVENTURA LLC MIAMI               FL",
      "category": "Groceries",
      "amount": 15.46,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-23",
      "description": "APPLE.COM/BILL      INTERNET CHARGE     CA",
      "category": "Internet Purchase",
      "amount": 9.99,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-23",
      "description": "PRIIP MART 663 00000BOCA RATON          FL",
      "category": "Fuel",
      "amount": 53.34,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-23",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 52.38,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-22",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 11.81,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-22",
      "description": "AplPay AUSTIN AIRPORAUSTIN              TX",
      "category": "Other Services",
      "amount": 6.23,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-22",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 246.15,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-22",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 23.56,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-22",
      "description": "WHOLE FOODS MARKET  BOCA RATON          FL",
      "category": "Groceries",
      "amount": 109.31,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-21",
      "description": "BARDOT BOCA         BOCA RATON          FL",
      "category": "Other Services",
      "amount": 189.5,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-21",
      "description": "TARGET              DEERFIELD BEACH     FL",
      "category": "Wholesale Stores",
      "amount": 197.71,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-21",
      "description": "TST* ROBOLIS RISTORABOCA RATON          FL",
      "category": "Restaurant",
      "amount": 43.47,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-21",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 21.86,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-21",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 43.74,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-20",
      "description": "AplPay BT*DD *DOORDASAN FRANCISCO       CA",
      "category": "Restaurant",
      "amount": 17.44,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-20",
      "description": "AplPay ZEDS ICE CREAAustin, TX          TX",
      "category": "Bar & Caf\u00e9",
      "amount": 8.66,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-20",
      "description": "CVS PHARMACY        BOCA RATON          FL",
      "category": "Pharmacies",
      "amount": 30.32,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-20",
      "description": "DD *DOORDASHDASHPASSSAN FRANCISCO       CA",
      "category": "Restaurant",
      "amount": 9.99,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-20",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 33.29,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-20",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 7.98,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-19",
      "description": "LE COLONIAL DELRAY BDELRAY BEACH        FL",
      "category": "Restaurant",
      "amount": 137.33,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-19",
      "description": "SCORESENSE.COM      800-679-6327        TX",
      "category": "Internet Purchase",
      "amount": 52.95,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-19",
      "description": "THE FRESH MARKET 218BOCA RATON          FL",
      "category": "Groceries",
      "amount": 29.95,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-19",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 22.05,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-19",
      "description": "WHOLE FOODS MARKET  BOCA RATON          FL",
      "category": "Groceries",
      "amount": 33.29,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-18",
      "description": "AplPay FIV*NUECES LIAUSTIN              TX",
      "category": "Groceries",
      "amount": 73.58,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-17",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 28.13,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-17",
      "description": "AMAZON.COM          AMZN.COM/BILL       WA",
      "category": "Internet Purchase",
      "amount": 37.58,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-17",
      "description": "AplPay BAO ZANG XIAOAustin              TX",
      "category": "Groceries",
      "amount": 16.24,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-17",
      "description": "AplPay PANDA PAWS CAAustin              TX",
      "category": "Groceries",
      "amount": 14.07,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-17",
      "description": "THE CONTAINER STORE BOCA RATON          FL",
      "category": "Furnishing",
      "amount": 58.84,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-17",
      "description": "TST* PURA VIDA WEST BOCA RATON          FL",
      "category": "Restaurant",
      "amount": 21.24,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-16",
      "description": "AplPay TST* JUICELANAUSTIN              TX",
      "category": "Restaurant",
      "amount": 4.28,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-16",
      "description": "THE CONTAINER STORE BOCA RATON          FL",
      "category": "Furnishing",
      "amount": 46.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-16",
      "description": "THE CONTAINER STORE BOCA RATON          FL",
      "category": "Furnishing",
      "amount": 69.64,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-16",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 7.35,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-16",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 9.94,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-16",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 14.11,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-16",
      "description": "WALGREENS           BOCA RATON          FL",
      "category": "Pharmacies",
      "amount": 6.41,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-15",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 43.91,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-15",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 231.56,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-15",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 43.41,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-15",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 11.98,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-15",
      "description": "WHOLE FOODS MARKET  BOCA RATON          FL",
      "category": "Groceries",
      "amount": 129.02,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-14",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 26.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-14",
      "description": "CVSExtraCare 8007467800-746-7287        RI",
      "category": "Pharmacies",
      "amount": 5.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-14",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 29.79,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-14",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 6.44,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-14",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 25.19,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-13",
      "description": "AplPay CVS PHARMACY AUSTIN              TX",
      "category": "Pharmacies",
      "amount": 50.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-13",
      "description": "HBO Max             NEW YORK            NY",
      "category": "Cable & Internet Comm",
      "amount": 11.34,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-13",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 67.07,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-13",
      "description": "THE CONTAINER STORE BOCA RATON          FL",
      "category": "Furnishing",
      "amount": 74.61,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-13",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 8.5,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-13",
      "description": "WALGREENS           BOCA RATON          FL",
      "category": "Pharmacies",
      "amount": 36.59,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-12",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 7.35,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-12",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 9.96,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-11",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 4.32,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-11",
      "description": "AplPay MANDOLAS ITALAUSTIN              TX",
      "category": "Restaurant",
      "amount": 28.15,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-11",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 43.96,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-11",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 6.93,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-10",
      "description": "OPENAI *CHATGPT SUBSSAN FRANCISCO       CA",
      "category": "Computer Supplies",
      "amount": 20.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-10",
      "description": "TST* PURA VIDA WEST BOCA RATON          FL",
      "category": "Restaurant",
      "amount": 43.71,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-10",
      "description": "UBER EATS           HTTPS://HELP.UBER.COCA",
      "category": "Restaurant",
      "amount": 30.18,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-10",
      "description": "UT RECEIVABLESWEB   AUSTIN              TX",
      "category": "Education",
      "amount": 90.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-09",
      "description": "MATTHEW T FOSTIER ODDEERFIELD BCH       FL",
      "category": "Health Care Services",
      "amount": 194.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-09",
      "description": "TARGET              DEERFIELD BEACH     FL",
      "category": "Wholesale Stores",
      "amount": 109.1,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-09",
      "description": "TARGET              DEERFIELD BEACH     FL",
      "category": "Wholesale Stores",
      "amount": 279.98,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-09",
      "description": "WHOLEFDS BCG #10839 BOCA RATON          FL",
      "category": "Groceries",
      "amount": 25.93,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-08",
      "description": "AUNTIE ANNE'S FL 285BOCA RATON          FL",
      "category": "Bar & Caf\u00e9",
      "amount": 8.98,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-08",
      "description": "AplPay DD *DOORDASH SAN FRANCISCO       CA",
      "category": "Restaurant",
      "amount": 24.74,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-08",
      "description": "AplPay MICHI JAPANESAUSTIN              TX",
      "category": "Bar & Caf\u00e9",
      "amount": 53.98,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-08",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 53.04,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "ADDISON COURT CLEANEBOCA RATON          FL",
      "category": "Other Services",
      "amount": 112.12,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "AplPay FIV*NUECES LIAUSTIN              TX",
      "category": "Groceries",
      "amount": 88.74,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "AplPay TST* VELVET TAUSTIN              TX",
      "category": "Restaurant",
      "amount": 23.36,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "BLOW AND GO BOCA    BOCA RATON          FL",
      "category": "Other Services",
      "amount": 43.51,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "DD *DOORDASHDASHPASSSAN FRANCISCO       CA",
      "category": "Restaurant",
      "amount": 9.99,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "GARDEN BUTCHER      Boca Raton          FL",
      "category": "Groceries",
      "amount": 16.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "LBU LIGHTING        BOCA RATON          FL",
      "category": "Furnishing",
      "amount": 4.53,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 23.82,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 26.4,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 11.97,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-07",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 14.64,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-06",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 16.45,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-06",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 48.47,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-06",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 58.27,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-06",
      "description": "CVS PHARMACY        BOCA RATON          FL",
      "category": "Pharmacies",
      "amount": 650.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-06",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 65.35,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-06",
      "description": "THE MEATING PLACE WEBOCA RATON          FL",
      "category": "Groceries",
      "amount": 23.37,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-06",
      "description": "WALGREENS           BOCA RATON          FL",
      "category": "Pharmacies",
      "amount": 37.26,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-05",
      "description": "AplPay CVS PHARMACY AUSTIN              TX",
      "category": "Pharmacies",
      "amount": 23.99,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-05",
      "description": "CHEVRON 0352703/CHEVBOCA RATON          FL",
      "category": "Fuel",
      "amount": 30.56,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-05",
      "description": "CVS PHARMACY        BOCA RATON          FL",
      "category": "Pharmacies",
      "amount": 108.05,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-05",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 59.69,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-05",
      "description": "TST* PURA VIDA WEST BOCA RATON          FL",
      "category": "Restaurant",
      "amount": 20.17,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-05",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 23.42,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-05",
      "description": "WWP*ARROW EXTERMINATBOCA RATON          FL",
      "category": "Other Services",
      "amount": 54.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-05",
      "description": "WWP*ARROW EXTERMINATBOCA RATON          FL",
      "category": "Other Services",
      "amount": 126.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-04",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 28.13,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-04",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 131.49,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-03",
      "description": "AplPay BT*RILEY CHILINDIANAPOLIS        IN",
      "category": "Charities",
      "amount": 32.1,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-03",
      "description": "TLF=WESTBANK FLOWER W LAKE HILLS        TX",
      "category": "Florists & Garden",
      "amount": 156.97,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-03",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 7.26,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-03",
      "description": "WHOLE FOODS MARKET  BOCA RATON          FL",
      "category": "Groceries",
      "amount": 121.84,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-02",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 7.37,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-02",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 5.25,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-02",
      "description": "WHOLE FOODS MARKET  BOCA RATON          FL",
      "category": "Groceries",
      "amount": 53.57,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-01",
      "description": "FIELD OF FLOWERS 650BOCA RATON          FL",
      "category": "Florists & Garden",
      "amount": 175.43,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-01",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 36.97,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-31",
      "description": "ADOBE Adobe Systems SAN JOSE            CA",
      "category": "Mail Order",
      "amount": 24.99,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-31",
      "description": "ADOBE Adobe Systems SAN JOSE            CA",
      "category": "Mail Order",
      "amount": 29.99,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-31",
      "description": "ADOBE Adobe Systems SAN JOSE            CA",
      "category": "Mail Order",
      "amount": 29.99,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-31",
      "description": "BT*FRESH PRINTS LLC NEW YORK            NY",
      "category": "Clothing Stores",
      "amount": 64.52,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-31",
      "description": "FTD* PLAZA FLOWERS 3NEW YORK            NY",
      "category": "Florists & Garden",
      "amount": 288.52,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-31",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 199.44,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-31",
      "description": "SIGNATURE CAR WASH  BOCA RATON          FL",
      "category": "Fuel",
      "amount": 14.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-31",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 27.09,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-31",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 11.74,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-30",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 23.8,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-30",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 71.39,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-30",
      "description": "AplPay IN-N-OUTAUSTIAUSTIN              TX",
      "category": "Bar & Caf\u00e9",
      "amount": 8.44,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-30",
      "description": "BHY*AEPHI 100000218 DANBURY             CT",
      "category": "Miscellaneous",
      "amount": 43.67,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-30",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 24.75,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-30",
      "description": "TST* PURA VIDA WEST BOCA RATON          FL",
      "category": "Restaurant",
      "amount": 58.53,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-30",
      "description": "UBER EATS           help.uber.com       CA",
      "category": "Restaurant",
      "amount": 39.24,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-30",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 83.59,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-30",
      "description": "WALGREENS           BOCA RATON          FL",
      "category": "Pharmacies",
      "amount": 31.71,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-29",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 31.22,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-29",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 31.22,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-29",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 43.89,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-29",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 49.38,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-29",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 120.01,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-29",
      "description": "AMAZON.COM          AMZN.COM/BILL       WA",
      "category": "Internet Purchase",
      "amount": 72.44,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-29",
      "description": "FEDEX OFFICE        BOCA RATON          FL",
      "category": "Office Supplies",
      "amount": 108.29,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-28",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 49.35,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-28",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 407.85,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-28",
      "description": "FEDEX OFFICE        BOCA RATON          FL",
      "category": "Office Supplies",
      "amount": 37.75,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-28",
      "description": "NEIMAN MARCUS REST 0Boca Raton",
      "category": "Restaurant",
      "amount": 36.5,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-28",
      "description": "PUBLIX              BOCA RATON          FL",
      "category": "Groceries",
      "amount": 174.61,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-28",
      "description": "TARGET        006387BOCA RATON          FL",
      "category": "Wholesale Stores",
      "amount": 137.43,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-28",
      "description": "TST* PURA VIDA WEST BOCA RATON          FL",
      "category": "Restaurant",
      "amount": 32.91,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-28",
      "description": "TST* ROBOLIS RISTORABOCA RATON          FL",
      "category": "Restaurant",
      "amount": 21.09,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-28",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 6.42,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-28",
      "description": "WALGREENS           BOCA RATON          FL",
      "category": "Pharmacies",
      "amount": 46.21,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 10.27,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 21.64,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 80.11,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "Amazon Prime        Amazon.com          WA",
      "category": "Mail Order",
      "amount": 15.13,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "AplPay ZEDS ICE CREAAustin, TX          TX",
      "category": "Bar & Caf\u00e9",
      "amount": 7.31,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "FEDEX OFFICE        BOCA RATON          FL",
      "category": "Office Supplies",
      "amount": 28.5,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "TARGET        006387BOCA RATON          FL",
      "category": "Wholesale Stores",
      "amount": 78.61,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 6.98,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 9.05,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 14.53,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 21.5,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-27",
      "description": "WHOLEFDS BCG #10839 BOCA RATON          FL",
      "category": "Groceries",
      "amount": 60.96,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-26",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 10.81,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-26",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 36.89,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-26",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 37.89,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-26",
      "description": "AMAZON MARKEPLACE NA PA",
      "category": "Internet Purchase",
      "amount": 41.08,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-26",
      "description": "AMAZON.COM          AMZN.COM/BILL       WA",
      "category": "Internet Purchase",
      "amount": 15.1,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-26",
      "description": "AplPay LEVI'S STORE AUSTIN              TX",
      "category": "Clothing Stores",
      "amount": 41.9,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-26",
      "description": "TST* PURA VIDA WEST BOCA RATON          FL",
      "category": "Restaurant",
      "amount": 30.22,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-26",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 16.88,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-26",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 17.61,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-25",
      "description": "GIRARD DIVERSIFIED IAUSTIN              TX",
      "category": "Other Services",
      "amount": 23.0,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-25",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 8.73,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-25",
      "description": "UBER",
      "category": "Taxis & Coach",
      "amount": 20.22,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-25",
      "description": "WALGREENS           BOCA RATON          FL",
      "category": "Pharmacies",
      "amount": 82.73,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-24",
      "description": "PRIIP MART 663 00000BOCA RATON          FL",
      "category": "Fuel",
      "amount": 57.44,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-10-24",
      "description": "TST* ROBOLIS RISTORABOCA RATON          FL",
      "category": "Restaurant",
      "amount": 32.79,
      "person": "Sam",
      "source": "Sam Amex Gold"
    },
    {
      "date": "2025-11-01",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 31.03,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-02",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 42.81,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-02",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 38.52,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-02",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 163.44,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-02",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 19.53,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-02",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 6.42,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-03",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 54.47,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-04",
      "description": "The Turn",
      "category": "Country Club",
      "amount": 28.09,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-06",
      "description": "The Turn",
      "category": "Country Club",
      "amount": 14.98,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-07",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 23.49,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-08",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 9.63,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-08",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 16.05,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-08",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 14.45,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-08",
      "description": "2025 Fall Social",
      "category": "Country Club",
      "amount": 267.5,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-09",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 89.88,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-09",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 16.59,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-10",
      "description": "The Market",
      "category": "Country Club",
      "amount": 6.42,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-11",
      "description": "The Market",
      "category": "Country Club",
      "amount": 9.63,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-12",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 15.78,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-14",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 23.49,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-15",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 21.14,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-15",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 34.24,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-16",
      "description": "The Market",
      "category": "Country Club",
      "amount": 9.63,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-16",
      "description": "The Market",
      "category": "Country Club",
      "amount": 3.21,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-18",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 63.93,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-20",
      "description": "The Market",
      "category": "Country Club",
      "amount": 21.4,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-20",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 42.8,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-20",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 24.61,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-21",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 22.9,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-23",
      "description": "The Market",
      "category": "Country Club",
      "amount": 9.63,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-23",
      "description": "Lakeside Patio",
      "category": "Country Club",
      "amount": 182.43,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-24",
      "description": "The Market",
      "category": "Country Club",
      "amount": 9.63,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-24",
      "description": "The Market",
      "category": "Country Club",
      "amount": 17.12,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-24",
      "description": "The Market",
      "category": "Country Club",
      "amount": 3.21,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-25",
      "description": "The Market",
      "category": "Country Club",
      "amount": 9.63,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-25",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 23.49,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-26",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 15.78,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-26",
      "description": "Lakeside",
      "category": "Country Club",
      "amount": 89.88,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-28",
      "description": "The Market",
      "category": "Country Club",
      "amount": 9.63,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-29",
      "description": "The Market",
      "category": "Country Club",
      "amount": 28.89,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-30",
      "description": "POA Capital Assessment",
      "category": "Country Club",
      "amount": 50.0,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-30",
      "description": "Special Assessment-Debt",
      "category": "Country Club",
      "amount": 500.0,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-30",
      "description": "POA Gen. Assessment",
      "category": "Country Club",
      "amount": 657.0,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-30",
      "description": "Benefitted Assessment-Sports",
      "category": "Country Club",
      "amount": 2937.5,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-30",
      "description": "Gallery",
      "category": "Country Club",
      "amount": 269.64,
      "person": "Edmund",
      "source": "St. Andrews CC"
    },
    {
      "date": "2025-11-05",
      "description": "Rushmore Mortgage Payment",
      "category": "Housing - Mortgage",
      "amount": 3585.59,
      "person": "Edmund",
      "source": "Rushmore Mortgage"
    },
    {
      "date": "2025-11-01",
      "description": "Sam Mercedes Payment",
      "category": "Auto - Car Payment",
      "amount": 1150.0,
      "person": "Sam",
      "source": "Manual Entry"
    },
    {
      "date": "2025-11-10",
      "description": "Renewed Physical Therapy",
      "category": "Health Care - Physical Therapy",
      "amount": 300.0,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-11-12",
      "description": "PBC Water Utility",
      "category": "Utilities - Water",
      "amount": 56.75,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-11-12",
      "description": "Sam Mercedes Payment (Check #5116)",
      "category": "Auto - Car Payment",
      "amount": 1455.65,
      "person": "Sam",
      "source": "Chase Bank"
    },
    {
      "date": "2025-11-17",
      "description": "Renewed Physical Therapy",
      "category": "Health Care - Physical Therapy",
      "amount": 120.0,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-11-19",
      "description": "FPL Electric",
      "category": "Utilities - Electric",
      "amount": 540.53,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-11-24",
      "description": "Venmo Payment",
      "category": "Miscellaneous",
      "amount": 120.0,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-11-24",
      "description": "Maria Jimenez - Household Help",
      "category": "Household Help",
      "amount": 200.0,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-11-25",
      "description": "Renewed Physical Therapy",
      "category": "Health Care - Physical Therapy",
      "amount": 120.0,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-11-26",
      "description": "Venmo Payment",
      "category": "Miscellaneous",
      "amount": 30.0,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-12-02",
      "description": "Zelle - Julie",
      "category": "Miscellaneous",
      "amount": 167.5,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-12-03",
      "description": "Renewed Physical Therapy",
      "category": "Health Care - Physical Therapy",
      "amount": 120.0,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-12-03",
      "description": "Nicole Hudson - Misc",
      "category": "Miscellaneous",
      "amount": 10.95,
      "person": "Edmund",
      "source": "Chase Bank"
    },
    {
      "date": "2025-12-05",
      "description": "SunPass Tolls",
      "category": "Transportation - Tolls",
      "amount": 10.0,
      "person": "Edmund",
      "source": "Chase Bank"
    }
  ],
  "debtAccounts": [
    {
      "account": "Rushmore Mortgage",
      "type": "Mortgage",
      "interestPaid": 829.45,
      "balance": 274576.05,
      "interestRate": 0.03625,
      "notes": "17657 Foxborough Ln, Boca Raton"
    },
    {
      "account": "Barclays JetBlue",
      "type": "Credit Card",
      "interestPaid": 792.0,
      "balance": 33538.96,
      "interestRate": null,
      "notes": "Acct ending 5737"
    },
    {
      "account": "Edmund Amex Platinum",
      "type": "Credit Card",
      "interestPaid": 470.18,
      "balance": 27925.43,
      "interestRate": null,
      "notes": "Acct ending 89006"
    },
    {
      "account": "Sam Amex Gold",
      "type": "Credit Card",
      "interestPaid": 0.0,
      "balance": 9557.58,
      "interestRate": null,
      "notes": "Acct ending 03006 - Paid in full"
    }
  ],
  "personSummary": [
    {
      "name": "Edmund",
      "totalSpent": 18603.41999999999,
      "percentOfFamily": 0.5715364499487555,
      "numTransactions": 120,
      "avgTransaction": 155.02849999999992
    },
    {
      "name": "Sam",
      "totalSpent": 12163.229999999998,
      "percentOfFamily": 0.3736801778441923,
      "numTransactions": 175,
      "avgTransaction": 69.50417142857141
    },
    {
      "name": "Sophie",
      "totalSpent": 1709.1899999999998,
      "percentOfFamily": 0.05250993553270924,
      "numTransactions": 68,
      "avgTransaction": 25.135147058823527
    },
    {
      "name": "Chloe",
      "totalSpent": 74.0,
      "percentOfFamily": 0.0022734366743431007,
      "numTransactions": 2,
      "avgTransaction": 37.0
    }
  ],
  "categoryAnalysis": [
    {
      "category": "Country Club",
      "amount": 5949.52,
      "percent": 0.2030659631939699
    },
    {
      "category": "Housing - Mortgage",
      "amount": 3585.59,
      "percent": 0.12238151766338572
    },
    {
      "category": "Health Insurance",
      "amount": 2143.26,
      "percent": 0.07315265034407951
    },
    {
      "category": "Groceries",
      "amount": 2134.47,
      "percent": 0.07285263457533261
    },
    {
      "category": "Internet Purchase",
      "amount": 2106.19,
      "percent": 0.07188739612935287
    },
    {
      "category": "Restaurant",
      "amount": 1718.73,
      "percent": 0.058662810263747645
    },
    {
      "category": "Lodging",
      "amount": 1648.44,
      "percent": 0.05626370805837576
    },
    {
      "category": "Auto - Car Payment",
      "amount": 1150.0,
      "percent": 0.03925120979054871
    },
    {
      "category": "Pharmacies",
      "amount": 1118.27,
      "percent": 0.038168217715197315
    },
    {
      "category": "Health Care Services",
      "amount": 858.02,
      "percent": 0.029285498282162266
    },
    {
      "category": "Wholesale Stores",
      "amount": 802.83,
      "percent": 0.027401781527083675
    },
    {
      "category": "Florists & Garden",
      "amount": 620.92,
      "percent": 0.021192922767954352
    },
    {
      "category": "Other Services",
      "amount": 593.24,
      "percent": 0.020248163214039234
    },
    {
      "category": "Dining",
      "amount": 525.01,
      "percent": 0.01791937187142259
    },
    {
      "category": "Fees & Adjustments",
      "amount": 499.18,
      "percent": 0.017037755568040092
    },
    {
      "category": "Taxis & Coach",
      "amount": 446.86,
      "percent": 0.015251996180004
    },
    {
      "category": "Shopping",
      "amount": 350.18,
      "percent": 0.011952164038655956
    },
    {
      "category": "Furnishing",
      "amount": 253.62,
      "percent": 0.00865642767572084
    },
    {
      "category": "Mobile Telecom",
      "amount": 206.12,
      "percent": 0.007035182053937305
    },
    {
      "category": "Fuel",
      "amount": 188.57,
      "percent": 0.006436174461046757
    },
    {
      "category": "Travel - Flights",
      "amount": 182.2,
      "percent": 0.006218756890293891
    },
    {
      "category": "Office Supplies",
      "amount": 174.54,
      "percent": 0.005957309701602063
    },
    {
      "category": "Insurance",
      "amount": 163.24,
      "percent": 0.005571623901051454
    },
    {
      "category": "Services",
      "amount": 122.84,
      "percent": 0.0041927118353660905
    },
    {
      "category": "Employment Agencies",
      "amount": 113.09,
      "percent": 0.0038599298393157864
    },
    {
      "category": "Software/Subscriptions",
      "amount": 107.99,
      "percent": 0.003685859256766396
    },
    {
      "category": "Clothing Stores",
      "amount": 106.42,
      "percent": 0.0036322728225306037
    },
    {
      "category": "Entertainment",
      "amount": 101.43,
      "percent": 0.003461956703526397
    },
    {
      "category": "Gas",
      "amount": 101.04,
      "percent": 0.0034486454236843846
    },
    {
      "category": "Mail Order",
      "amount": 100.1,
      "percent": 0.0034165618261164576
    },
    {
      "category": "Dining/Bar",
      "amount": 99.87,
      "percent": 0.003408711584158348
    },
    {
      "category": "Education",
      "amount": 90.0,
      "percent": 0.003071833809695117
    },
    {
      "category": "Subscriptions",
      "amount": 89.99,
      "percent": 0.0030714924948273725
    },
    {
      "category": "Bar & Caf\u00e9",
      "amount": 87.37,
      "percent": 0.0029820679994784706
    },
    {
      "category": "Fitness",
      "amount": 75.4,
      "percent": 0.00257351410278902
    },
    {
      "category": "Miscellaneous",
      "amount": 68.67,
      "percent": 0.002343809196797374
    },
    {
      "category": "Food Delivery",
      "amount": 66.84,
      "percent": 0.00228134857600024
    },
    {
      "category": "General Events",
      "amount": 50.0,
      "percent": 0.0017065743387195092
    },
    {
      "category": "Theatrical Events",
      "amount": 49.9,
      "percent": 0.0017031611900420703
    },
    {
      "category": "Laundry",
      "amount": 45.0,
      "percent": 0.0015359169048475584
    },
    {
      "category": "Personal Care",
      "amount": 45.0,
      "percent": 0.0015359169048475584
    },
    {
      "category": "Cable & Internet Comm",
      "amount": 44.76,
      "percent": 0.0015277253480217047
    },
    {
      "category": "Travel - Hotel",
      "amount": 42.34,
      "percent": 0.0014451271500276806
    },
    {
      "category": "Streaming/Entertainment",
      "amount": 39.79,
      "percent": 0.0013580918587529855
    },
    {
      "category": "Pharmacy",
      "amount": 37.11,
      "percent": 0.0012666194741976198
    },
    {
      "category": "Parking Charges",
      "amount": 33.0,
      "percent": 0.001126339063554876
    },
    {
      "category": "Charities",
      "amount": 32.1,
      "percent": 0.0010956207254579251
    },
    {
      "category": "Computer Supplies",
      "amount": 29.95,
      "percent": 0.001022238028892986
    },
    {
      "category": "Professional Services",
      "amount": 25.0,
      "percent": 0.0008532871693597546
    },
    {
      "category": "Recreation",
      "amount": 17.95,
      "percent": 0.0006126601876003038
    },
    {
      "category": "Rideshare",
      "amount": 15.53,
      "percent": 0.0005300619896062796
    },
    {
      "category": "Software",
      "amount": 15.0,
      "percent": 0.0005119723016158528
    },
    {
      "category": "Internet Services",
      "amount": 12.99,
      "percent": 0.00044336801319932854
    },
    {
      "category": "General Retail",
      "amount": 9.99,
      "percent": 0.00034097355287615794
    },
    {
      "category": "Government Services",
      "amount": 3.0,
      "percent": 0.00010239446032317055
    },
    {
      "category": "TOTAL",
      "amount": 29298.460000000003,
      "percent": 1.0
    }
  ]
};
