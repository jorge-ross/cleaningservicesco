import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Droplet, Shield, Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Sparkles className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">CleanCo</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Cleaning Co"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-[90%] lg:order-last"
                src="/images/CleanCo_Logo.png"
                width="500"
                height="500"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Sparkle & Shine with CleanCo
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Professional cleaning services for homes and businesses. Experience the difference with our eco-friendly products and expert team.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Get a Quote</Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Droplet className="h-12 w-12 text-blue-500" />
                  <h3 className="text-2xl font-bold text-center">Deep Cleaning</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Thorough cleaning of every nook and cranny, leaving your space spotless.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Shield className="h-12 w-12 text-green-500" />
                  <h3 className="text-2xl font-bold text-center">Eco-Friendly Products</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    We use environmentally safe cleaning products for a healthier home and planet.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Star className="h-12 w-12 text-yellow-500" />
                  <h3 className="text-2xl font-bold text-center">Customized Plans</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Tailored cleaning plans to meet your specific needs and schedule.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Customers Say</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                  &quot;CleanCo has transformed our office space. Their attention to detail is impeccable, and the staff is always professional.&quot;
                  </p>
                  <p className="font-semibold">- Sarah J., Office Manager</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                  &quot;I love coming home to a sparkling clean house. CleanCo&apos;s eco-friendly approach gives me peace of mind.&quot;
                  </p>
                  <p className="font-semibold">- Michael T., Homeowner</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready for a Cleaner Space?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Contact us today for a free quote and experience the CleanCo difference.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  Get a Free Quote
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  No obligation, cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CleanCo. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

