// components and imports remain unchanged
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, ChevronRight, ArrowRight, CheckIcon, ShieldCheck, Clock, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Fixo</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="text-sm font-medium">Post a task</Link>
              <Link href="#" className="text-sm font-medium">Browse tasks</Link>
              <Link href="#" className="text-sm font-medium">How it works</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">Sign in</Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Register</Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-24">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-900 leading-tight">
                GET MORE<br />DONE
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Post any task. Find the right people to help. Get things done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-md">
                  Post a task now
                </Button>
                <Button variant="outline" className="rounded-md">
                  Become a Tasker
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>4.9/5</span>
                </div>
                <div>5M+ tasks posted</div>
                <div>1M+ taskers</div>
              </div>
            </div>
            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                alt="Person carrying boxes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Why choose Fixo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
                  title: "Safety First",
                  description: "All Taskers are verified and reviewed. We prioritize your safety with secure payments and insurance coverage."
                },
                {
                  icon: <Clock className="h-10 w-10 text-blue-600" />,
                  title: "Save Time",
                  description: "Post your task in minutes and get matched with qualified Taskers quickly. No need to search for hours."
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-blue-600" />,
                  title: "Quality Work",
                  description: "Our community of skilled Taskers delivers high-quality work across a wide range of categories."
                }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">How Fixo Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Post a task",
                  description: "Describe what you need help with and set your budget."
                },
                {
                  step: "2",
                  title: "Get offers",
                  description: "Receive offers from skilled Taskers in your area."
                },
                {
                  step: "3",
                  title: "Choose a Tasker",
                  description: "Select the right person based on reviews and skills."
                },
                {
                  step: "4",
                  title: "Get it done",
                  description: "Your Tasker completes the job and you release payment."
                }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-blue-600 text-white py-12 md:py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h2 className="text-3xl font-bold">TO THE TEAM BEHIND THE DREAM</h2>
              <Button variant="secondary" className="whitespace-nowrap rounded-md">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="mt-8 relative h-[200px] md:h-[300px] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-blue-900">Popular Categories</h2>
              <Button variant="outline" className="text-blue-600 rounded-md gap-2 group">
                View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "Furniture Assembly",
                  image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
                  tasks: "2,453 tasks"
                },
                {
                  title: "Home Cleaning",
                  image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
                  tasks: "3,821 tasks"
                },
                {
                  title: "Moving Help",
                  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                  tasks: "1,932 tasks"
                },
                {
                  title: "Delivery",
                  image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80",
                  tasks: "4,217 tasks"
                }
              ].map((category, i) => (
                <div key={i} className="relative group rounded-lg overflow-hidden cursor-pointer">
                  <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                    <img src={category.image} alt={category.title} className="w-full h-40 object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm opacity-80">{category.tasks}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Post Task Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Post your first task in seconds
              </h2>
              <p className="text-gray-600">
                It's easy to get started. Just tell us what you need help with.
              </p>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border p-6">
              <div className="space-y-4">
                <Input type="text" placeholder="e.g. Help moving furniture" className="mt-1" />
                <Input type="text" placeholder="Enter suburb" className="mt-1" />
                <Input type="date" className="mt-1" />
                <Input type="number" placeholder="$" className="mt-1" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-md">
                  Get quotes now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="bg-gray-50 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Trusted by thousands of happy customers</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-10">From moving help to home cleaning, Fixo has helped over 5 million tasks get done safely and reliably.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Amanda S.",
                  review: "I posted a last-minute task and got help in under an hour. The Tasker was professional and kind!",
                },
                {
                  name: "Jason R.",
                  review: "Fixo made it so easy to get furniture assembled. Highly recommended!",
                },
                {
                  name: "Priya T.",
                  review: "I've been using Fixo for months and every task has gone smoothly.",
                },
              ].map((user, i) => (
                <Card key={i} className="p-6 bg-white rounded-lg border text-left">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span className="font-semibold">{user.name}</span>
                  </div>
                  <p className="text-gray-600">{user.review}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How does Fixo work?",
                  answer: "Post a task, describe what needs to be done, set a budget, and receive offers from trusted Taskers. Choose the one that suits you best and get the job done.",
                },
                {
                  question: "Is it free to post a task?",
                  answer: "Yes! Posting a task on Fixo is completely free. You only pay once you've accepted an offer and the task is completed.",
                },
                {
                  question: "How do I become a Tasker?",
                  answer: "Click on 'Become a Tasker' to sign up. Fill in your profile, verify your identity, and start receiving task offers near you.",
                },
                {
                  question: "Are payments secure?",
                  answer: "Absolutely. All payments are processed securely through our platform. Taskers get paid after you confirm the task is completed.",
                },
                {
                  question: "What happens if I'm not satisfied with the work?",
                  answer: "Your satisfaction is our priority. If you're not happy with the completed task, you can request revisions or contact our support team for assistance.",
                },
                {
                  question: "Can I cancel a task after posting it?",
                  answer: "Yes, you can cancel a task at any time before accepting an offer. Once you've accepted an offer, cancellation policies may apply.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b pb-4">
                  <h3 className="font-semibold text-lg text-blue-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="container text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to get more done?</h2>
            <p className="max-w-xl mx-auto mb-8 opacity-90">Join millions of people who use Fixo to get help with their everyday tasks.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-md">
                Post a task now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700 rounded-md">
                Become a Tasker
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Fixo</h3>
              <p className="text-sm text-gray-300">
                Fixo is the go-to platform for outsourcing everyday tasks. Post a job, set your budget, and get offers from trusted Taskers in your area.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Get Started</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:underline">Post a Task</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Become a Tasker</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Download the App</Link></li>
                <li><Link href="#" className="text-sm hover:underline">How it Works</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Popular Categories</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:underline">Furniture Assembly</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Moving Help</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Home Cleaning</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Delivery Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support & Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:underline">Help Center</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Community Guidelines</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-blue-800 pt-8">
            <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Fixo Inc. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-gray-200" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8a4 4 0 110 8 4 4 0 010-8zm4.25-.75a.75.75 0 110 1.5.75.75 0 010-1.5zM12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-200" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.403-4.111 11.635-11.635 11.635-2.31 0-4.457-.676-6.263-1.843.326.037.64.05.98.05 1.915 0 3.675-.653 5.075-1.753a4.093 4.093 0 01-3.826-2.846c.253.038.505.063.77.063.37 0 .74-.05 1.084-.14a4.088 4.088 0 01-3.273-4.012v-.05a4.11 4.11 0 001.848.516 4.095 4.095 0 01-1.27-5.46 11.615 11.615 0 008.42 4.27 4.62 4.62 0 01-.101-.938 4.088 4.088 0 017.084-2.79 8.048 8.048 0 002.59-.988 4.093 4.093 0 01-1.796 2.26 8.187 8.187 0 002.36-.64 8.694 8.694 0 01-2.042 2.11z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-200" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.792-1.75-1.765s.784-1.764 1.75-1.764c.966 0 1.75.791 1.75 1.764s-.784 1.765-1.75 1.765zm13.5 10.268h-3v-4.569c0-1.091-.02-2.494-1.519-2.494-1.52 0-1.753 1.147-1.753 2.414v4.649h-3v-9h2.881v1.233h.041c.401-.761 1.38-1.561 2.841-1.561 3.038 0 3.6 2 3.6 4.594v4.734z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}