import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from 'lucide-react';

const servicesData = {
    'aluminium-fabrication': {
        title: 'Aluminium Fabrication',
        description: 'Premium aluminium fabrication services for modern homes and businesses.',
        longDescription: 'Our aluminium fabrication service offers custom-made solutions including kitchen cabinets, window frames, sliding doors, and showcases. We use high-grade aluminium materials that are rust-resistant, lightweight, and durable. Each project is tailored to your specific measurements and design preferences.',
        images: [
            'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
        ],
        features: [
            'Custom measurements and designs',
            'Rust-resistant materials',
            'Modern powder-coated finishes',
            'Professional installation included',
            '5-year warranty on workmanship',
        ],
    },
    'metal-gates-grilles': {
        title: 'Metal Gates & Grilles',
        description: 'Secure and stylish gates, window grilles, and fencing solutions.',
        longDescription: 'Enhance your property security with our custom metal gates and window grilles. We offer a wide range of designs from traditional to contemporary styles. Each piece is crafted with precision welding and finished with anti-rust coating for long-lasting protection.',
        images: [
            'https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1581093458791-9d42e4e4d8da?auto=format&fit=crop&q=80&w=1200',
        ],
        features: [
            'Auto gate systems available',
            'Custom ornamental designs',
            'Heavy-duty security grilles',
            'Anti-rust powder coating',
            'Remote control integration',
        ],
    },
    'home-renovations': {
        title: 'Home Renovations',
        description: 'Complete home makeover services including tiling, plaster ceiling, and painting.',
        longDescription: 'Transform your living space with our comprehensive renovation services. From minor repairs to full-scale remodeling, we handle everything including flooring, ceiling work, painting, electrical, and plumbing. Our experienced team ensures quality workmanship and timely completion.',
        images: [
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200',
        ],
        features: [
            'Kitchen and bathroom renovations',
            'Floor tiling and marble work',
            'Plaster ceiling and cornice',
            'Interior and exterior painting',
            'Complete project management',
        ],
    },
    'roofing-awnings': {
        title: 'Roofing & Awnings',
        description: 'Durable polycarbonate, metal deck, and glass roofing installations.',
        longDescription: 'Protect your property from the elements with our professional roofing solutions. We specialize in polycarbonate roofing, metal deck roofing, glass canopies, and custom awnings. All installations are weatherproof and come with comprehensive warranties.',
        images: [
            'https://images.unsplash.com/photo-1620626012724-42f4b46c8d76?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1632778865151-fd440d8ed59d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
        ],
        features: [
            'UV-resistant polycarbonate sheets',
            'Metal deck roofing systems',
            'Glass canopy installations',
            'Custom awning designs',
            'Waterproof guarantees',
        ],
    },
};

export function ServiceDetail() {
    const { id } = useParams();
    const service = servicesData[id];

    const whatsappUrl = `https://wa.me/601123892010?text=Hi%20FVQ%20Rezky,%20I'm%20interested%20in%20${service?.title}%20services.`;

    if (!service) {
        return (
            <div className="container py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                <Link to="/services">
                    <Button>Back to Services</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{service.title} - FVQ Rezky Enterprise</title>
                <meta name="description" content={service.description} />
            </Helmet>

            {/* Hero Section */}
            <div className="relative h-[50vh] overflow-hidden bg-zinc-950">
                <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container text-center text-white space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold">{service.title}</h1>
                        <p className="text-xl max-w-2xl mx-auto">{service.description}</p>
                    </div>
                </div>
            </div>

            <div className="container py-16">
                <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Services
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">About This Service</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {service.longDescription}
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold">What's Included:</h3>
                            <ul className="space-y-3">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                        <span className="text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open(whatsappUrl, '_blank')}>
                            Get a Free Quote
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {service.images.slice(1).map((img, index) => (
                            <div key={index} className="rounded-xl overflow-hidden shadow-lg aspect-video">
                                <img src={img} alt={`${service.title} ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center space-y-6">
                    <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={() => window.open(whatsappUrl, '_blank')}>
                            WhatsApp Us
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link to="/contact">Visit Contact Page</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
