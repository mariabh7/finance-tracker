export const Categories = [
  {
    item: "food and dining",
    itemId: "1",
    period: "monthly",
    paid: 800,
    total: 1000,
  },
  {
    item: "transport",
    itemId: "2",
    period: "monthly",
    paid: 100,
    total: 3000,
  },
  {
    item: "shopping",
    itemId: "3",
    period: "monthly",
    paid: 100,
    total: 200,
  },
];
export const Transaction = [
  {
    id: 1,
    type: "income",
    amount: 4200,
    category: "Salary",
    description: "Monthly salary",
    date: "2024-01-01",
  },
  {
    id: 2,
    type: "expense",
    amount: 850,
    category: "food and dining",
    description: "Groceries and restaurants",
    date: "2024-01-02",
  },
  {
    id: 3,
    type: "expense",
    amount: 420,
    category: "transport",
    description: "Gas and car maintenance",
    date: "2024-01-03",
  },
  {
    id: 4,
    type: "expense",
    amount: 920,
    category: "Bills & Utilities",
    description: "Electricity, water, internet",
    date: "2024-01-04",
  },
  {
    id: 5,
    type: "income",
    amount: 500,
    category: "Freelance",
    description: "Web design project",
    date: "2024-01-05",
  },
];
export function getTotal(array, type) {
  return array
    .filter((item) => item.type === type)
    .map((item) => item.amount)
    .reduce((sum, next) => sum + next);
}
export function updateBudget() {
  for (let item of Transaction) {
    let bud = Categories.find((ct) => ct.item == item.category);
    if (bud) {
      console.log(bud);
      bud.paid = item.amount;
    }
  }
}
