import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/fvqrezky.png';

export function Navbar() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const whatsappUrl = "https://wa.me/601123892010?text=Hi%20FVQ%20Rezky,%20I%20would%20like%20to%20get%20a%20quote.";

    const NavLinks = () => (
        <>
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('home')}
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('services')}
            </Link>
            <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('portfolio')}
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('about')}
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors font-medium">
                FAQ
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('contact')}
            </Link>
        </>
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-24 items-center justify-between px-4 md:px-6 lg:px-8">
                <Link to="/" className="flex items-center space-x-3">
                    <img src={logo} alt="FVQ Rezky" className="h-16 md:h-20 w-auto" />
                    <div className="hidden sm:block">
                        <div className="text-lg md:text-xl font-bold text-foreground">FVQ REZKY</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Enterprise</div>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <NavLinks />
                    <LanguageSwitcher />
                    <Button asChild onClick={() => window.open(whatsappUrl, '_blank')}>
                        <span>{t('getQuote')}</span>
                    </Button>
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <LanguageSwitcher />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-4 mt-8">
                                <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                    {t('home')}
                                </Link>
                                <Link to="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                    {t('services')}
                                </Link>
                                <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                    {t('portfolio')}
                                </Link>
                                <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                    {t('about')}
                                </Link>
                                <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                    {t('contact')}
                                </Link>
                                <Button className="w-full mt-4" onClick={() => { setIsOpen(false); window.open(whatsappUrl, '_blank'); }}>
                                    {t('getQuote')}
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
