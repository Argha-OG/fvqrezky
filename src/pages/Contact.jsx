import { useLanguage } from '@/context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export function Contact() {
    const { t } = useLanguage();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! We will contact you at +60 11 2389 2010 or your email shortly.");
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Get a Quote | FVQ Rezky Enterprise</title>
                <meta name="description" content="Contact FVQ Rezky for a free quote. Visit our branches in Jalan Gombak (KL) and Selangor. Call +60 11 2389 2010 today." />
                <meta name="keywords" content="Contact Contractor, Get Renovation Quote, Welding Quote KL, FVQ Rezky Phone Number, Location Gombak, Location Selangor" />
                <link rel="canonical" href="https://fvqrezkyenterprise.site/contact" />
            </Helmet>

            {/* Modern Hero Banner */}
            <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-zinc-950 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover scale-105 animate-in fade-in zoom-in duration-1000" alt="Contact Background" />
                </div>
                <div className="relative z-10 text-center text-white space-y-6 px-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium backdrop-blur-sm mb-2">
                        24/7 Support Available
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight">{t('contactUs')}</h1>
                    <p className="text-xl text-zinc-300 max-w-lg mx-auto leading-relaxed">{t('getQuote')} for your next project within 24 hours.</p>
                </div>
            </div>

            <div className="container py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Contact Info & Maps */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                Get in Touch <MessageSquare className="text-primary h-8 w-8" />
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Ready to start your project? Use the form to send us a message or contact us directly via phone or email.
                            </p>

                            <div className="grid gap-6">
                                <Card className="hover:shadow-md transition-shadow border-l-4 border-l-primary cursor-pointer group">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Phone / WhatsApp</h3>
                                            <p className="text-muted-foreground text-sm mb-1">Mon-Sat 9am to 6pm</p>
                                            <a href="tel:+601123892010" className="text-xl font-bold text-primary hover:underline">+60 11 2389 2010</a>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="hover:shadow-md transition-shadow border-l-4 border-l-primary cursor-pointer group">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Email</h3>
                                            <p className="text-muted-foreground text-sm mb-1">For quotes & inquiries</p>
                                            <a href="mailto:fvqrezkyenterprise@gmail.com" className="text-lg font-medium hover:text-primary transition-colors break-all">fvqrezkyenterprise@gmail.com</a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Locations Section with 2 Maps */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <MapPin className="text-primary" /> Our Locations
                            </h2>

                            {/* Branch 1 */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold badge bg-zinc-100 text-zinc-800 px-3 py-1 rounded-full">Branch 1 (HQ) - KL</h3>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> Open Now</span>
                                </div>
                                <div className="h-64 rounded-xl overflow-hidden bg-muted border border-zinc-200 relative group shadow-inner">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d190.16959557211197!2d101.70647299284231!3d3.2132961525107846!2m2!1f137.65177367647146!2f45!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x31cc3875692a3d8d%3A0x9f4c8ec08ceefb83!2sFvq%20Rezky%20Enterprise!5e1!3m2!1sen!2smy!4v1765183803923!5m2!1sen!2smy"
                                        className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <p className="text-sm text-muted-foreground pl-1">Lot 123, Jalan Gombak, 53100 Kuala Lumpur</p>
                            </div>

                            {/* Branch 2 */}
                            <div className="space-y-3 pt-6 border-t">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold badge bg-zinc-100 text-zinc-800 px-3 py-1 rounded-full">Branch 2 - Selangor Workshop</h3>
                                </div>
                                <div className="h-64 rounded-xl overflow-hidden bg-muted border border-zinc-200 relative group shadow-inner">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4025.075908001841!2d101.69699999999999!3d3.2043333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMTInMTUuNiJOIDEwMcKwNDEnNDkuMiJF!5e1!3m2!1sen!2smy!4v1765187657867!5m2!1sen!2smy"
                                        className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <p className="text-sm text-muted-foreground pl-1">Selangor Workshop Location</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <Card className="shadow-2xl border-none ring-1 ring-black/5 bg-white/50 backdrop-blur-xl">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" placeholder="John" className="bg-white/80" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" placeholder="Doe" className="bg-white/80" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" className="bg-white/80" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" type="tel" placeholder="+60 11 2389 2010" className="bg-white/80" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="service">Service Interested In</Label>
                                        <select className="flex h-10 w-full rounded-md border border-input bg-white/80 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                            <option>Aluminium Gates</option>
                                            <option>Renovations</option>
                                            <option>Roofing</option>
                                            <option>General Welding</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Project Details</Label>
                                        <Textarea id="message" placeholder="Tell us about your requirements..." className="min-h-[150px] bg-white/80" required />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full text-lg font-semibold shadow-lg hover:shadow-primary/25 transition-all hover:scale-[1.02]">
                                        Send Message
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground mt-4">
                                        By submitting this form, you agree to our privacy policy. We respect your data.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
