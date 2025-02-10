import { useQuery } from "@tanstack/react-query";
import { useSettings } from "./use-settings";
import livelyPropertiesUrl from '/LivelyProperties.json?url'

function getLanguageFromBrowser() {
    if (navigator.languages !== undefined) return navigator.languages[0];
    return navigator.language;
}

export function useLanguage() {
    const query = useQuery({
        queryKey: ['lively-props-configuration', livelyPropertiesUrl],
        queryFn: async () => {
            const data = await fetch(livelyPropertiesUrl)
                .then((r) => r.json())
            return data
        },
    })
    const languageId = useSettings<number>("language", 0)
    const languageCode = query.data?.language.items[languageId] || getLanguageFromBrowser()
    return languageCode
}