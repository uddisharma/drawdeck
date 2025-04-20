import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Users, Zap, Layers, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MiroClonePage() {
    return (
        <div className="flex min-h-screen flex-col ">
            <main className="flex-1">
                {/* Features Section */}
                <section id="features" className="bg-white py-20 dark:bg-slate-950/50">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl  tracking-tight sm:text-4xl">
                                Everything you need for visual collaboration
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                Powerful features designed to make teamwork seamless and effective
                            </p>
                        </div>
                        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-lg border bg-background p-8 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950">
                                    <Users className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Real-time Collaboration</h3>
                                <p className="text-muted-foreground">
                                    Work together with your team in real-time, seeing changes instantly as they happen.
                                </p>
                            </div>
                            <div className="rounded-lg border bg-background p-8 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950">
                                    <Zap className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Infinite Canvas</h3>
                                <p className="text-muted-foreground">
                                    Never run out of space with our infinitely expandable whiteboard canvas.
                                </p>
                            </div>
                            <div className="rounded-lg border bg-background p-8 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950">
                                    <Layers className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Rich Templates</h3>
                                <p className="text-muted-foreground">
                                    Start quickly with hundreds of customizable templates for any use case.
                                </p>
                            </div>
                            <div className="rounded-lg border bg-background p-8 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950">
                                    <Globe className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Cross-platform Access</h3>
                                <p className="text-muted-foreground">
                                    Access your boards from any device, anywhere, with perfect synchronization.
                                </p>
                            </div>
                            <div className="rounded-lg border bg-background p-8 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950">
                                    <CheckCircle className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Smart Drawing Tools</h3>
                                <p className="text-muted-foreground">
                                    Express ideas clearly with intelligent drawing tools that perfect your sketches.
                                </p>
                            </div>
                            <div className="rounded-lg border bg-background p-8 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950">
                                    <Layers className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Integrations</h3>
                                <p className="text-muted-foreground">
                                    Connect with your favorite tools like Slack, Jira, and more for seamless workflows.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="py-20">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl tracking-tight sm:text-4xl">How it works</h2>
                            <p className="mt-4 text-muted-foreground">
                                Get started in minutes and transform how your team collaborates
                            </p>
                        </div>
                        <div className="mt-16 grid gap-12 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-600 dark:bg-rose-950 dark:text-rose-400">
                                    1
                                </div>
                                <h3 className="mt-6 text-xl font-bold">Create your board</h3>
                                <p className="mt-2 text-muted-foreground">
                                    Start from scratch or choose from our library of templates designed for various workflows.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-600 dark:bg-rose-950 dark:text-rose-400">
                                    2
                                </div>
                                <h3 className="mt-6 text-xl font-bold">Invite your team</h3>
                                <p className="mt-2 text-muted-foreground">
                                    Share your board with teammates and collaborate in real-time, no matter where they are.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-600 dark:bg-rose-950 dark:text-rose-400">
                                    3
                                </div>
                                <h3 className="mt-6 text-xl font-bold">Collaborate & create</h3>
                                <p className="mt-2 text-muted-foreground">
                                    Brainstorm, plan, design, and present—all in one collaborative space.
                                </p>
                            </div>
                        </div>
                        <div className="mt-16 text-center">
                            <Button asChild size="lg">
                                <Link href="#">Start collaborating now</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="bg-slate-50 py-20 dark:bg-slate-950/50">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl tracking-tight sm:text-4xl">Loved by teams worldwide</h2>
                            <p className="mt-4 text-muted-foreground">See what our customers have to say about their experience</p>
                        </div>
                        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-lg border bg-background p-6 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=60"
                                        width={60}
                                        height={60}
                                        alt="User avatar"
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold">Sarah Johnson</h4>
                                        <p className="text-sm text-muted-foreground">Product Manager, Acme Inc.</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-muted-foreground">
                                    Whiteboard has transformed how our distributed team collaborates. We can now visualize our ideas
                                    together in real-time, making our meetings more productive and engaging.
                                </p>
                            </div>
                            <div className="rounded-lg border bg-background p-6 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=60"
                                        width={60}
                                        height={60}
                                        alt="User avatar"
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold">Michael Chen</h4>
                                        <p className="text-sm text-muted-foreground">UX Designer, TechCorp</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-muted-foreground">
                                    The infinite canvas and intuitive drawing tools have made our design thinking workshops so much more
                                    effective. Its like having a physical whiteboard but better.
                                </p>
                            </div>
                            <div className="rounded-lg border bg-background p-6 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=60"
                                        width={60}
                                        height={60}
                                        alt="User avatar"
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold">Emily Rodriguez</h4>
                                        <p className="text-sm text-muted-foreground">Team Lead, Startup Co.</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-muted-foreground">
                                    We have cut our meeting times in half while doubling our productivity. The templates are a game-changer
                                    for quick starts on new projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
                            <p className="mt-4 text-muted-foreground">Choose the plan thats right for you and your team</p>
                        </div>
                        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-lg border bg-background p-8 shadow-sm transition-all hover:shadow-md">
                                <h3 className="text-2xl font-bold">Free</h3>
                                <p className="mt-2 text-muted-foreground">Perfect for individuals and small teams</p>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-bold">$0</span>
                                    <span className="ml-1 text-muted-foreground">/month</span>
                                </div>
                                <ul className="mt-6 space-y-4">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>3 boards</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>Basic templates</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>24-hour history</span>
                                    </li>
                                </ul>
                                <Button asChild className="mt-8 w-full" variant="outline">
                                    <Link href="#">Get started</Link>
                                </Button>
                            </div>
                            <div className="relative rounded-lg border border-rose-200 bg-background p-8 shadow-md transition-all hover:shadow-lg dark:border-rose-800">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-rose-500 px-4 py-1 text-sm font-medium text-white">
                                    Popular
                                </div>
                                <h3 className="text-2xl font-bold">Pro</h3>
                                <p className="mt-2 text-muted-foreground">For growing teams and organizations</p>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-bold">$12</span>
                                    <span className="ml-1 text-muted-foreground">/user/month</span>
                                </div>
                                <ul className="mt-6 space-y-4">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>Unlimited boards</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>Advanced templates</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>Unlimited history</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>All integrations</span>
                                    </li>
                                </ul>
                                <Button asChild className="mt-8 w-full">
                                    <Link href="#">Start free trial</Link>
                                </Button>
                            </div>
                            <div className="rounded-lg border bg-background p-8 shadow-sm transition-all hover:shadow-md">
                                <h3 className="text-2xl font-bold">Enterprise</h3>
                                <p className="mt-2 text-muted-foreground">For large organizations with specific needs</p>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-bold">Custom</span>
                                </div>
                                <ul className="mt-6 space-y-4">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>Everything in Pro</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>SSO & advanced security</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>Dedicated support</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>Custom onboarding</span>
                                    </li>
                                </ul>
                                <Button asChild className="mt-8 w-full" variant="outline">
                                    <Link href="#">Contact sales</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
