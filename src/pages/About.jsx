import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Trophy, Users, History, Award, Target, Heart, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function About() {
    const { t } = useLanguage();
    const whatsappUrl = "https://wa.me/601123892010?text=Hi%20FVQ%20Rezky,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>About Us - Trusted Contractors | FVQ Rezky Enterprise</title>
                <meta name="description" content="Learn about FVQ Rezky Enterprise. Over 10 years of experience in welding and renovation. Dedicated to quality and customer satisfaction in KL & Selangor." />
                <meta name="keywords" content="About FVQ Rezky, Trusted Contractor KL, Experienced Welders, Renovation Company History, Metalwork Experts, Professional Fabricators Malaysia" />
                <link rel="canonical" href="https://fvqrezkyenterprise.site/about" />
            </Helmet>

            {/* Hero Section */}
            <div className="relative h-[50vh] overflow-hidden bg-zinc-950">
                <img
                    src="https://images.unsplash.com/photo-1581093450065-0a6b548b9e6f?auto=format&fit=crop&q=80&w=2070"
                    alt="Our Team"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container text-center text-white space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold">{t('about')}</h1>
                        <p className="text-xl max-w-2xl mx-auto">Building Trust Through Quality Craftsmanship Since 2015</p>
                    </div>
                </div>
            </div>

            {/* Company Story */}
            <section className="py-16 bg-background">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold tracking-tight">Our Story</h2>
                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Founded in 2015, <strong className="text-foreground">FVQ Rezky Enterprise</strong> began as a small welding workshop in Gombak with a simple mission: to provide honest, quality metalwork services to the local community.
                                </p>
                                <p>
                                    Over the years, we've grown into a full-service home improvement contractor, serving clients across the entire Klang Valley. Our expansion is built on a foundation of customer trust, word-of-mouth referrals, and an unwavering commitment to excellence.
                                </p>
                                <p>
                                    Today, we handle everything from intricate aluminium fabrication to complete home renovations, always maintaining the same personal touch and attention to detail that defined our early days.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                                    alt="Team Working"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Achievements */}
            <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
                        <p className="text-muted-foreground text-lg">Numbers that speak for themselves</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="pt-6">
                                <History className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-4xl font-bold mb-2">10+</h3>
                                <p className="text-muted-foreground">Years in Business</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="pt-6">
                                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-4xl font-bold mb-2">500+</h3>
                                <p className="text-muted-foreground">Projects Completed</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="pt-6">
                                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-4xl font-bold mb-2">50+</h3>
                                <p className="text-muted-foreground">Skilled Craftsmen</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="pt-6">
                                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-4xl font-bold mb-2">100%</h3>
                                <p className="text-muted-foreground">Client Satisfaction</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-background">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide every project we undertake</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <CardContent className="pt-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <Award className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Quality First</h3>
                                <p className="text-muted-foreground">We never compromise on material quality or workmanship standards.</p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <CardContent className="pt-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <Heart className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Customer Care</h3>
                                <p className="text-muted-foreground">Your satisfaction is our top priority, from quote to completion.</p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <CardContent className="pt-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <Target className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Precision</h3>
                                <p className="text-muted-foreground">Exact measurements and meticulous attention to detail in every project.</p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <CardContent className="pt-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <Zap className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">Efficiency</h3>
                                <p className="text-muted-foreground">Timely completion without sacrificing quality or safety.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Why Choose FVQ Rezky Enterprise?</h2>
                            <p className="text-muted-foreground text-lg">What sets us apart from other contractors</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-2">Licensed & Insured</h3>
                                    <p className="text-sm text-muted-foreground">Fully licensed contractors with comprehensive insurance coverage for your peace of mind.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-2">Transparent Pricing</h3>
                                    <p className="text-sm text-muted-foreground">No hidden costs. Detailed quotations with itemized breakdowns before work begins.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-2">5-Year Warranty</h3>
                                    <p className="text-sm text-muted-foreground">All structural work comes with a comprehensive 5-year warranty on workmanship.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-2">Expert Team</h3>
                                    <p className="text-sm text-muted-foreground">Certified welders and experienced craftsmen with proven track records.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-2">Premium Materials</h3>
                                    <p className="text-sm text-muted-foreground">We source only high-grade materials from trusted suppliers to ensure longevity.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-white dark:bg-zinc-800 rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-2">On-Time Delivery</h3>
                                    <p className="text-sm text-muted-foreground">We respect your schedule. Projects completed within agreed timelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Area */}
            <section className="py-16 bg-background">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl font-bold">Serving Klang Valley</h2>
                        <p className="text-muted-foreground text-lg">
                            We proudly serve clients across Kuala Lumpur, Selangor, and surrounding areas including Gombak, Setapak, Ampang, Kepong, Cheras, and beyond.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 pt-4">
                            {['Gombak', 'Setapak', 'Ampang', 'Kepong', 'Cheras', 'Mont Kiara', 'Bangsar', 'Petaling Jaya'].map((area) => (
                                <span key={area} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Ready to Work With Us?</h2>
                    <p className="text-lg max-w-2xl mx-auto opacity-90">
                        Experience the difference that professionalism and dedication make. Contact us today for a free consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button size="lg" variant="secondary" className="font-bold" onClick={() => window.open(whatsappUrl, '_blank')}>
                            Get Free Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                            <Link to="/portfolio">View Our Work</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
