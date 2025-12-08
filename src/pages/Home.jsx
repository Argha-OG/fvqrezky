import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Star, Shield, Hammer, ChevronRight, Quote, CheckCircle, Phone, Mail } from 'lucide-react';

export function Home() {
    const { t, language } = useLanguage();
    const whatsappUrl = "https://wa.me/601123892010?text=Hi%20FVQ%20Rezky,%20I%20would%20like%20to%20get%20a%20quote.";

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! We'll contact you soon.");
    };

    return (
        <>
            <Helmet>
                <title>Welding & Aluminium Services KL | FVQ Rezky Enterprise</title>
                <meta name="description" content="Expert welding, aluminium fabrication, and home renovation services in Kuala Lumpur & Selangor. Custom gates, grilles, roofing, and more. Get a free quote today!" />
                <meta name="keywords" content="Welding Services KL, Aluminium Fabrication Selangor, Home Renovation Malaysia, Custom Metal Gates, Window Grilles, Awning Installation, Polycarbonate Roofing, Iron Works Gombak, Steel Works KL, Glass Works, Auto Gate Systems, Security Doors, Kitchen Cabinets, Wardrobe Systems, FVQ Rezky Enterprise, Tukang Besi KL, Renovation Contractor" />
                <link rel="canonical" href="https://fvqrezky.com/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fvqrezky.com/" />
                <meta property="og:title" content="Welding & Aluminium Services KL | FVQ Rezky Enterprise" />
                <meta property="og:description" content="Expert welding, aluminium fabrication, and home renovation services in Kuala Lumpur & Selangor. Custom gates, grilles, roofing, and more." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://fvqrezky.com/" />
                <meta property="twitter:title" content="Welding & Aluminium Services KL | FVQ Rezky Enterprise" />
                <meta property="twitter:description" content="Expert welding, aluminium fabrication, and home renovation services in Kuala Lumpur & Selangor." />
                <meta property="twitter:image" content="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "FVQ Rezky Enterprise",
                        "image": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
                        "@id": "https://fvqrezky.com",
                        "url": "https://fvqrezky.com",
                        "telephone": "+601123892010",
                        "email": "fvqrezkyenterprise@gmail.com",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Lot 123, Jalan Gombak",
                            "addressLocality": "Kuala Lumpur",
                            "addressRegion": "Selangor",
                            "postalCode": "53100",
                            "addressCountry": "MY"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 3.205934,
                            "longitude": 101.703777
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                            ],
                            "opens": "09:00",
                            "closes": "18:00"
                        },
                        "sameAs": [
                            "https://www.facebook.com/fvq.rezky/",
                            "https://www.instagram.com/fvq_rezky/",
                            "https://www.tiktok.com/@fvq_rezky"
                        ]
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-zinc-950 text-white overflow-hidden">
                {/* Background Parallax Effect */}
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2070"
                        alt="Welding Worker"
                        className="w-full h-full object-cover opacity-30 scale-105 animate-in fade-in duration-[2000ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
                </div>

                <div className="relative z-10 container text-center space-y-8 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-700">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-zinc-300">Available for projects in KL & Selangor</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-4xl mx-auto leading-[1.1]">
                        {t('heroTitle')}
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 font-light">
                        {t('heroSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 pt-4">
                        <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all hover:scale-105" onClick={() => window.open(whatsappUrl, '_blank')}>
                            {t('getQuote')} <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-transparent border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm transition-all hover:scale-105" asChild>
                            <Link to="/services">{t('exploreServices')}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-background border-b">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-primary">10+</div>
                            <div className="text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-primary">500+</div>
                            <div className="text-muted-foreground">Projects Done</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-primary">50+</div>
                            <div className="text-muted-foreground">Expert Workers</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-primary">100%</div>
                            <div className="text-muted-foreground">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro / Features Section */}
            <section className="py-24 bg-background">
                <div className="container">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">Why Choose FVQ Rezky?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We combine traditional craftsmanship with modern technology to deliver superior results.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-none shadow-xl bg-card hover:-translate-y-2 transition-transform duration-300 group">
                            <CardContent className="pt-8 flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                    <Star className="w-8 h-8 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Premium Quality</h3>
                                <p className="text-muted-foreground leading-relaxed">We use only the highest grade materials for durability and aesthetics, ensuring your investment lasts.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-xl bg-card hover:-translate-y-2 transition-transform duration-300 group">
                            <CardContent className="pt-8 flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                    <Shield className="w-8 h-8 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Expert Craftsmanship</h3>
                                <p className="text-muted-foreground leading-relaxed">Over 10 years of experience in custom fabrication, welding, and structural integrity.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-xl bg-card hover:-translate-y-2 transition-transform duration-300 group">
                            <CardContent className="pt-8 flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                    <Hammer className="w-8 h-8 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Custom Solutions</h3>
                                <p className="text-muted-foreground leading-relaxed">Tailored designs to fit your specific needs, architectural style, and budget requirements.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="container">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">What Our Clients Say</h2>
                        <p className="text-muted-foreground text-lg">Don't just take our word for it</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Ahmad Abdullah", location: "Gombak", text: "Excellent service! They installed my auto gate perfectly. Very professional team and reasonable pricing." },
                            { name: "Siti Nurhaliza", location: "Setapak", text: "Renovated my entire kitchen with aluminium cabinets. Quality is top-notch and the finish is beautiful!" },
                            { name: "Kevin Tan", location: "Kepong", text: "Fast and efficient. They completed my roofing project in just 3 days. Highly recommend!" }
                        ].map((testimonial, index) => (
                            <Card key={index} className="border-none shadow-lg relative">
                                <CardContent className="pt-12 pb-8 px-6">
                                    <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="py-24 bg-background">
                <div className="container space-y-12">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">Our Recent Work</h2>
                            <p className="text-muted-foreground max-w-xl">Explore our latest projects showcasing our expertise in metal and aluminium works.</p>
                        </div>
                        <Button variant="outline" className="hidden md:flex gap-2 group border-primary/20 hover:border-primary text-primary hover:bg-primary/5" asChild>
                            <Link to="/portfolio">View Full Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg cursor-pointer">
                                <img src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=450&text=Project+${i}`}
                                    alt="Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Project Title {i}</h3>
                                    <p className="text-zinc-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Click to view details</p>
                                </div>
                                <Link to="/portfolio" className="absolute inset-0 z-10">
                                    <span className="sr-only">View Project</span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center md:hidden">
                        <Button variant="outline" className="gap-2 group w-full sm:w-auto" asChild>
                            <Link to="/portfolio">View Full Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Section on Homepage */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Get Your Free Quote Today</h2>
                            <p className="text-muted-foreground text-lg">Fill out the form and we'll get back to you within 24 hours</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            <Card className="shadow-xl">
                                <CardContent className="p-8">
                                    <form onSubmit={handleContactSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="john@example.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input id="phone" type="tel" placeholder="+60 11 2389 2010" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" required />
                                        </div>
                                        <Button type="submit" size="lg" className="w-full">Send Message</Button>
                                    </form>
                                </CardContent>
                            </Card>

                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Contact Information</h3>
                                    <p className="text-muted-foreground">Reach out to us directly via phone, email, or visit our office.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg">
                                        <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold">Phone / WhatsApp</div>
                                            <a href="tel:+601123892010" className="text-primary hover:underline">+60 11 2389 2010</a>
                                            <p className="text-sm text-muted-foreground mt-1">Mon-Sat: 9AM - 6PM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg">
                                        <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                                        <div>
                                            <div className="font-semibold">Email</div>
                                            <a href="mailto:fvqrezkyenterprise@gmail.com" className="text-primary hover:underline break-all">fvqrezkyenterprise@gmail.com</a>
                                            <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="container relative z-10 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Ready to Upgrade Your Space?</h2>
                    <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
                        Get a free consultation and quote for your fabrication or renovation project today.
                    </p>
                    <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1" onClick={() => window.open(whatsappUrl, '_blank')}>
                        Get Your Free Quote
                    </Button>
                </div>
            </section>
        </>
    );
}
