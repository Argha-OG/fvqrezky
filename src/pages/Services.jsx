import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Services() {
    const { t } = useLanguage();

    const services = [
        {
            id: 'aluminium-fabrication',
            title: "Aluminium Fabrication",
            description: "Custom aluminium cabinets, windows, doors, and showcases tailored to your needs.",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 'metal-gates-grilles',
            title: "Metal Gates & Grilles",
            description: "Secure and stylish gates, window grilles, and fencing solutions.",
            image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 'home-renovations',
            title: "Home Renovations",
            description: "Complete home makeover services including tiling, plaster ceiling, and painting.",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600"
        },
        {
            id: 'roofing-awnings',
            title: "Roofing & Awnings",
            description: "Durable polycarbonate, metal deck, and glass roofing installations.",
            image: "https://images.unsplash.com/photo-1620626012724-42f4b46c8d76?auto=format&fit=crop&q=80&w=600"
        },
    ];

    return (
        <div className="py-16">
            <div className="container px-6 md:px-8 lg:px-12">
                <Helmet>
                    <title>Services - Welding, Aluminium & Renovation | FVQ Rezky</title>
                    <meta name="description" content="Professional services: Aluminium fabrication, custom metal gates, home renovations, roofing, and welding works in KL & Selangor." />
                    <meta name="keywords" content="Aluminium Cabinets, Metal Gates, House Renovation, Roofing Contractors, Welding Services, Grille Work, Staircase Railing, Glass Partition" />
                    <link rel="canonical" href="https://fvqrezky.com/services" />
                </Helmet>

                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">{t('services')}</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From welding to full-scale renovations, we deliver excellence in every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <Link key={index} to={`/services/${service.id}`}>
                            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="flex items-center gap-2 text-white font-semibold">
                                            <span>View Details</span>
                                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-8 space-y-4">
                                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
