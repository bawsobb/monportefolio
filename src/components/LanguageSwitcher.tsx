"use client";

import { ToggleButton, Flex } from '@/once-ui/components';
import { useTranslation } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

export const LanguageSwitcher: React.FC = () => {
    const { locale, setLocale } = useTranslation();
    const router = useRouter();

    const handleLanguageChange = (newLocale: 'en' | 'fr') => {
        setLocale(newLocale);
        setTimeout(() => {
            router.refresh();
        }, 0);
    };

    return (
        <Flex gap="4">
            <ToggleButton
                size="s"
                onClick={() => handleLanguageChange('fr')}
                selected={locale === 'fr'}
                label="FR"
            />
            <ToggleButton
                size="s"
                onClick={() => handleLanguageChange('en')}
                selected={locale === 'en'}
                label="EN"
            />
        </Flex>
    );
};
