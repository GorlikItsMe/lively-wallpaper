import { useSettings } from "./use-settings";
import livelyProperties from '@/../public/LivelyProperties.json'

function getLanguageFromBrowser() {
    if (navigator.languages !== undefined) return navigator.languages[0];
    return navigator.language;
}

export function useLanguage() {
    const languageId = useSettings<number>("language", 0)
    const languageCode = livelyProperties.language.items[languageId]
    return languageCode || getLanguageFromBrowser()
}