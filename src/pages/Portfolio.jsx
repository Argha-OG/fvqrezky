import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Portfolio() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Metal', 'Aluminium', 'Renovation', 'Roofing'];

    const projects = [
        { id: 'modern-gate', title: "Modern Security Gate", category: "Metal", image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&q=80&w=400" },
        { id: 'kitchen-cabinet', title: "Kitchen Cabinet", category: "Aluminium", image: "https://images.unsplash.com/photo-1556912173-3db996ea6322?auto=format&fit=crop&q=80&w=400" },
        { id: 'house-extension', title: "House Extension", category: "Renovation", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400" },
        { id: 'polycarbonate-roof', title: "Polycarbonate Roof", category: "Roofing", image: "https://images.unsplash.com/photo-1620626012724-42f4b46c8d76?auto=format&fit=crop&q=80&w=400" },
        { id: 'modern-gate', title: "Security Grille", category: "Metal", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=400" },
        { id: 'kitchen-cabinet', title: "Glass Partition", category: "Aluminium", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=400" },
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="py-16">
            <div className="container px-6 md:px-8 lg:px-12">
                <Helmet>
                    <title>Portfolio - Our Projects | FVQ Rezky Enterprise</title>
                    <meta name="description" content="View our gallery of completed welding, aluminium, and renovation projects. See the quality of our craftsmanship in KL & Selangor." />
                    <meta name="keywords" content="Project Gallery, Metal Work Portfolio, Renovation Examples, Custom Gates Design, Aluminium Kitchen Photos, Roofing Projects" />
                    <link rel="canonical" href="https://fvqrezky.com/portfolio" />
                </Helmet>

                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">{t('portfolio')}</h1>
                    <p className="text-muted-foreground text-lg">Check out our latest craftsmanship.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={filter === cat ? "default" : "outline"}
                            onClick={() => setFilter(cat)}
                            className="rounded-full px-6"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <Link key={index} to={`/portfolio/${project.id}`}>
                            <div className="group relative rounded-lg overflow-hidden aspect-square cursor-pointer bg-muted hover:shadow-2xl transition-all duration-300">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                    <p className="text-primary font-medium text-sm mb-2">{project.category}</p>
                                    <h3 className="text-white text-xl font-bold mb-4">{project.title}</h3>
                                    <div className="flex items-center gap-2 text-white font-semibold">
                                        <span>View Project</span>
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
