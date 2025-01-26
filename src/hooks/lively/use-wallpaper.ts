import { useSettings } from "@/hooks";
import { useEffect } from "react";


function path2url(path: string) {
    return path.replaceAll("\\", "/");
}


export function useWallpaper() {
    const settings = useSettings();

    useEffect(() => {
        const l = setInterval(() => {
            if (!settings.backgroundImageDaySelect ||
                !settings.backgroundImageNightSelect) {
                return; // not fully loaded yet
            }

            const dt = new Date();
            const isDay = dt.getHours() >= 6 && dt.getHours() < 19;
            console.log("isDay", isDay);

            const style = isDay ? {
                backgroundImage: `url('/${path2url(settings.backgroundImageDaySelect)}')`,
            } : {
                backgroundImage: `url('/${path2url(settings.backgroundImageNightSelect)}')`,
            };


            document.body.style.backgroundImage = style.backgroundImage;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
        }, 1000);
        return () => clearInterval(l);
    }, [settings.backgroundImageDaySelect, settings.backgroundImageNightSelect]);

    return null;
}