import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="restaurant-name text-5xl font-bold">Welcome to The Cozy Corner</h1>
        <p className="text-xl max-w-2xl mx-auto">Experience comfort food in a warm, inviting atmosphere. Our locally-sourced ingredients and family recipes bring you the taste of home with every bite.</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/menu">View Our Menu</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Our Specialties</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li className="menu-item">Homemade Pasta</li>
              <li className="menu-item">Grilled to Perfection Steaks</li>
              <li className="menu-item">Fresh Seafood Dishes</li>
              <li className="menu-item">Vegetarian and Vegan Options</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hours of Operation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="menu-item">Monday - Thursday: 11am - 9pm</p>
            <p className="menu-item">Friday - Saturday: 11am - 11pm</p>
            <p className="menu-item">Sunday: 10am - 8pm</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Location</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="menu-item">123 Comfort Lane</p>
            <p className="menu-item">Cozy Town, CT 06789</p>
            <p className="menu-item">Phone: (555) 123-4567</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="restaurant-name text-4xl font-bold mb-4">Featured Dish</h2>
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Featured dish"
            layout="fill"
            objectFit="cover"
            className="featured-image"
          />
        </div>
        <p className="mt-4 text-xl">Try our mouthwatering Grilled Salmon with Lemon Butter Sauce!</p>
      </section>
    </div>
  )
}

