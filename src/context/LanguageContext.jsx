import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About Us",
        contact: "Contact",
        getQuote: "Get a Quote",
        heroTitle: "Premium Welding & Fabrication Services",
        heroSubtitle: "Expert craftsmanship in Aluminium, Iron, and Stainless Steel.",
        exploreServices: "Explore Services",
        contactUs: "Contact Us",
    },
    bm: {
        home: "Utama",
        services: "Perkhidmatan",
        portfolio: "Portfolio",
        about: "Tentang Kami",
        contact: "Hubungi",
        getQuote: "Dapatkan Sebut Harga",
        heroTitle: "Perkhidmatan Kimpalan & Fabrikasi Premium",
        heroSubtitle: "Kepakaran pertukangan dalam Aluminium, Besi, dan Keluli Tahan Karat.",
        exploreServices: "Lihat Perkhidmatan",
        contactUs: "Hubungi Kami",
    },
    ch: {
        home: "主页",
        services: "服务",
        portfolio: "作品集",
        about: "关于我们",
        contact: "联系我们",
        getQuote: "获取报价",
        heroTitle: "优质焊接与制造服务",
        heroSubtitle: "铝、铁和不锈钢方面的专家工艺。",
        exploreServices: "探索服务",
        contactUs: "联系我们",
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
