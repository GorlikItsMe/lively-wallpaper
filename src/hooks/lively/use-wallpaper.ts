import { useSettings } from "@/hooks";
import { useEffect } from "react";


function path2url(path: string) {
    return path.replaceAll("\\", "/");
}

export function useWallpaper() {
    const backgroundImageDaySelect = useSettings('backgroundImageDaySelect', 'wallpapers/wallhaven-exk2zr.png');
    const backgroundImageNightSelect = useSettings('backgroundImageNightSelect', 'wallpapers/wallhaven-x6q953.png');

    useEffect(() => {
        const l = setInterval(() => {
            const dt = new Date();
            const isDay = dt.getHours() >= 6 && dt.getHours() < 19;

            const style = isDay ? {
                backgroundImage: `url('/${path2url(backgroundImageDaySelect)}')`,
            } : {
                backgroundImage: `url('/${path2url(backgroundImageNightSelect)}')`,
            };

            document.body.style.backgroundImage = style.backgroundImage;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
        }, 1000);
        return () => clearInterval(l);
    }, [backgroundImageDaySelect, backgroundImageNightSelect]);

    return null;
}