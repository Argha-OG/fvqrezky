import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react';

const projectsData = {
    'modern-gate': {
        title: 'Modern Security Gate',
        category: 'Metal',
        location: 'Ampang, KL',
        date: 'November 2024',
        description: 'Custom-designed modern security gate with auto-lock system and ornamental details.',
        fullDescription: 'This project involved designing and installing a premium security gate for a residential property in Ampang. The gate features a sleek modern design with integrated auto-lock mechanism and decorative laser-cut patterns. Built using heavy-duty mild steel with powder-coated finish for superior rust resistance.',
        images: [
            'https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1581093458791-9d42e4e4d8da?auto=format&fit=crop&q=80&w=1200',
        ],
        specifications: [
            'Material: Heavy-duty mild steel',
            'Finish: Black powder coating',
            'Features: Auto-lock system, remote control',
            'Dimensions: 12ft (W) x 7ft (H)',
            'Completion Time: 5 days',
        ],
    },
    'kitchen-cabinet': {
        title: 'Modern Kitchen Cabinet',
        category: 'Aluminium',
        location: 'Gombak, Selangor',
        date: 'October 2024',
        description: 'Full kitchen renovation with custom aluminium cabinets and countertop.',
        fullDescription: 'Complete kitchen transformation featuring custom-made aluminium cabinets with soft-close hinges, granite countertop, and integrated sink. The design maximizes storage space while maintaining a clean, modern aesthetic. All materials are food-safe and easy to maintain.',
        images: [
            'https://images.unsplash.com/photo-1556912173-3db996ea6322?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1556912167-f556f1f39faa?auto=format&fit=crop&q=80&w=1200',
        ],
        specifications: [
            'Material: Aluminium composite with wood grain finish',
            'Countertop: Imported granite',
            'Features: Soft-close hinges, pull-out drawers',
            'Configuration: L-shaped, 15ft total length',
            'Completion Time: 10 days',
        ],
    },
    'house-extension': {
        title: 'House Extension Project',
        category: 'Renovation',
        location: 'Setapak, KL',
        date: 'September 2024',
        description: 'Complete house extension including new bedroom and bathroom.',
        fullDescription: 'This renovation project added a new bedroom and bathroom to an existing single-story terrace house. The work included foundation, brickwork, roofing, electrical wiring, plumbing, tiling, and painting. The extension seamlessly blends with the existing structure.',
        images: [
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200',
        ],
        specifications: [
            'Area: 300 sq ft extension',
            'Scope: Foundation, walls, roofing, wiring, plumbing',
            'Flooring: Ceramic tiles',
            'Ceiling: Plaster ceiling with cove lighting',
            'Completion Time: 45 days',
        ],
    },
    'polycarbonate-roof': {
        title: 'Polycarbonate Roofing',
        category: 'Roofing',
        location: 'Kepong, KL',
        date: 'December 2024',
        description: 'UV-resistant polycarbonate roofing for car porch area.',
        fullDescription: 'Installation of premium UV-resistant polycarbonate roofing to protect vehicles from sun and rain. The structure features sturdy mild steel framework with clear polycarbonate sheets that allow natural light while blocking harmful UV rays.',
        images: [
            'https://images.unsplash.com/photo-1620626012724-42f4b46c8d76?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1632778865151-fd440d8ed59d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
        ],
        specifications: [
            'Material: 8mm UV-coated polycarbonate',
            'Frame: Mild steel with powder coating',
            'Coverage: 400 sq ft',
            'Features: Rain gutter system, UV protection',
            'Completion Time: 3 days',
        ],
    },
};

export function PortfolioDetail() {
    const { id } = useParams();
    const project = projectsData[id];

    const whatsappUrl = `https://wa.me/601123892010?text=Hi%20FVQ%20Rezky,%20I%20saw%20your%20${project?.title}%20project%20and%20I'm%20interested%20in%20similar%20work.`;

    if (!project) {
        return (
            <div className="container py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/portfolio">
                    <Button>Back to Portfolio</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{project.title} - Portfolio | FVQ Rezky Enterprise</title>
                <meta name="description" content={project.description} />
            </Helmet>

            {/* Hero Image */}
            <div className="relative h-[60vh] overflow-hidden bg-zinc-950">
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="container">
                        <div className="inline-block px-3 py-1 bg-primary rounded-full text-sm font-medium mb-4">
                            {project.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
                        <div className="flex flex-wrap gap-6 text-zinc-300">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                <span>{project.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-16">
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary hover:underline mb-12">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Portfolio
                </Link>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {project.images.slice(1).map((img, index) => (
                                <div key={index} className="rounded-xl overflow-hidden shadow-lg aspect-video">
                                    <img src={img} alt={`${project.title} ${index + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Tag className="h-5 w-5 text-primary" />
                                Specifications
                            </h3>
                            <ul className="space-y-3">
                                {project.specifications.map((spec, index) => (
                                    <li key={index} className="text-sm border-b border-zinc-200 dark:border-zinc-700 pb-2 last:border-0">
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-4 text-center">
                            <h3 className="text-xl font-bold">Interested in Similar Work?</h3>
                            <p className="text-sm text-muted-foreground">
                                Get a free consultation and quote for your project.
                            </p>
                            <Button className="w-full" onClick={() => window.open(whatsappUrl, '_blank')}>
                                Contact Us on WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
