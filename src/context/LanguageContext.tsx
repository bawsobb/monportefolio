"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { person as personEn, social as socialEn, newsletter as newsletterEn, home as homeEn, about as aboutEn, blog as blogEn, work as workEn, gallery as galleryEn } from '@/app/resources/content-en';
import { person as personFr, social as socialFr, newsletter as newsletterFr, home as homeFr, about as aboutFr, blog as blogFr, work as workFr, gallery as galleryFr } from '@/app/resources/content-fr';

type LanguageContextType = {
    locale: 'en' | 'fr';
    setLocale: (locale: 'en' | 'fr') => void;
    t: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode; initialLocale?: 'en' | 'fr' }> = ({ children, initialLocale = 'fr' }) => {
    const [locale, setLocaleState] = useState<'en' | 'fr'>(initialLocale);

    const setLocale = (newLocale: 'en' | 'fr') => {
        setLocaleState(newLocale);
        document.cookie = `locale=${newLocale};path=/;max-age=31536000`; // 1 year
    };

    const t = locale === 'en' ? {
        person: personEn,
        social: socialEn,
        newsletter: newsletterEn,
        home: homeEn,
        about: aboutEn,
        blog: blogEn,
        work: workEn,
        gallery: galleryEn,
        locale: 'en'
    } : {
        person: personFr,
        social: socialFr,
        newsletter: newsletterFr,
        home: homeFr,
        about: aboutFr,
        blog: blogFr,
        work: workFr,
        gallery: galleryFr,
        locale: 'fr'
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};
