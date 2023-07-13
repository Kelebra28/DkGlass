import { useState, useEffect } from 'react';
import enJson from '../traduction/en.json';
import esJson from '../traduction/es.json';


export const useChangeLanguage = () => {
    const [language, setLanguage] = useState<boolean>(true);
    const [translations, setTranslations] = useState<any>(esJson);

    useEffect(() => {
        if(language){
            setTranslations(enJson)
        } else {
            setTranslations(esJson)
        }

    }, [language])

    return {
        translations,
        setLanguage,
        language,
    }
    
}