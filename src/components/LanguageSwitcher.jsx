import { useLanguage } from '@/context/LanguageContext';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const languages = {
        en: "English",
        bm: "Bahasa Melayu",
        ch: "中文 (Chinese)"
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Globe className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-accent' : ''}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('bm')} className={language === 'bm' ? 'bg-accent' : ''}>
                    Bahasa Melayu
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ch')} className={language === 'ch' ? 'bg-accent' : ''}>
                    中文
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
