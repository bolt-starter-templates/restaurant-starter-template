import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const menuItems = [
  { category: "Appetizers", items: [
    { name: "Bruschetta", price: "$8" },
    { name: "Spinach and Artichoke Dip", price: "$10" },
  ]},
  { category: "Main Courses", items: [
    { name: "Grilled Salmon", price: "$22" },
    { name: "Chicken Parmesan", price: "$18" },
    { name: "Vegetable Stir Fry", price: "$16" },
  ]},
  { category: "Desserts", items: [
    { name: "Chocolate Lava Cake", price: "$8" },
    { name: "New York Cheesecake", price: "$7" },
  ]},
]

export default function Menu() {
  return (
    <div className="space-y-6">
      <h1 className="restaurant-name text-5xl font-bold text-center">Our Menu</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.name} className="menu-item flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

