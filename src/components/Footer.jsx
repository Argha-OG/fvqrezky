import { useLanguage } from '@/context/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/fvqrezky.png';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full border-t bg-zinc-950 text-zinc-300 py-12 md:py-16">
            <div className="container flex flex-col gap-12 px-4 md:px-6 lg:px-8">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="space-y-4 max-w-sm">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src={logo} alt="FVQ Rezky" className="h-12 w-auto" />
                            <div>
                                <div className="text-lg font-bold text-white">FVQ REZKY</div>
                                <div className="text-sm text-zinc-400">Enterprise</div>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-zinc-400">
                            Your trusted partner in premium welding, aluminium fabrication, and home renovations. Quality craftsmanship guaranteed.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://www.facebook.com/fvq.rezky/" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/fvq_rezky/" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://www.tiktok.com/@fvq_rezky" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <Video className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-white flex items-center gap-2">
                                {t('services')}
                            </h3>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-1 group">
                                    <span className="group-hover:translate-x-1 transition-transform">Aluminium Work</span>
                                </Link>
                                <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-1 group">
                                    <span className="group-hover:translate-x-1 transition-transform">Metal Gates</span>
                                </Link>
                                <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-1 group">
                                    <span className="group-hover:translate-x-1 transition-transform">Renovations</span>
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-white">Quick Links</h3>
                            <div className="flex flex-col gap-3 text-sm">
                                <Link to="/portfolio" className="hover:text-primary transition-colors">{t('portfolio')}</Link>
                                <Link to="/about" className="hover:text-primary transition-colors">{t('about')}</Link>
                                <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                                <Link to="/contact" className="hover:text-primary transition-colors">{t('contact')}</Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-white flex items-center gap-2">
                                {t('contact')}
                            </h3>
                            <div className="space-y-4 text-sm">
                                {/* Branch 1 (HQ) */}
                                <div className="flex items-start gap-3 group">
                                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:animate-bounce" />
                                    <div>
                                        <strong className="text-white block mb-1">Branch 1 (HQ):</strong>
                                        <a href="https://www.google.com/maps/place/Fvq+Rezky+Enterprise/@3.2119431,101.7051498,924m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31cc3875692a3d8d:0x9f4c8ec08ceefb83!8m2!3d3.2119431!4d101.7077247!16s%2Fg%2F11whltk3s9?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
                                            KL, Federal Territory
                                        </a>
                                    </div>
                                </div>

                                {/* Branch 2 */}
                                <div className="flex items-start gap-3 group">
                                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:animate-bounce" />
                                    <div>
                                        <strong className="text-white block mb-1">Branch 2:</strong>
                                        <a href="https://www.google.com/maps/place/3%C2%B012'15.6%22N+101%C2%B041'49.2%22E/@3.204341,101.697,924m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d3.204341!4d101.697?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary transition-colors">
                                            Selangor Workshop
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 group pt-2">
                                    <Phone className="h-4 w-4 text-primary shrink-0 group-hover:rotate-12 transition-transform" />
                                    <a href="tel:+601123892010" className="hover:text-white transition-colors">+60 11 2389 2010</a>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <Mail className="h-4 w-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                    <a href="mailto:fvqrezkyenterprise@gmail.com" className="hover:text-white transition-colors break-all">fvqrezkyenterprise@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <p>© 2025 FVQ Rezky Enterprise. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
