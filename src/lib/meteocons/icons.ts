// source: https://github.com/basmilius/website/blob/main/src/app/work/meteocons/icons.ts

export const iconStyles: IconStyles = {
    fill: 'Fill',
    line: 'Outline'
};

export const iconGroups = [
    {
        label: 'Weather',
        icons: [[
            'clear-day',
            'clear-night',
            'cloudy',
            'drizzle',
            'fog',
            'hail',
            'haze',
            'rain',
            'sleet',
            'smoke',
            'snow',
            'partly-cloudy-day',
            'partly-cloudy-day-drizzle',
            'partly-cloudy-day-fog',
            'partly-cloudy-day-hail',
            'partly-cloudy-day-haze',
            'partly-cloudy-day-rain',
            'partly-cloudy-day-sleet',
            'partly-cloudy-day-smoke',
            'partly-cloudy-day-snow',
            'partly-cloudy-night',
            'partly-cloudy-night-drizzle',
            'partly-cloudy-night-fog',
            'partly-cloudy-night-hail',
            'partly-cloudy-night-haze',
            'partly-cloudy-night-rain',
            'partly-cloudy-night-sleet',
            'partly-cloudy-night-smoke',
            'partly-cloudy-night-snow',
            'mist',
            'hurricane',
            'tornado',
            'wind',
            'dust',
            'dust-day',
            'dust-night',
            'dust-wind',
            'wind-snow',
            'fog-day',
            'fog-night',
            'haze-day',
            'haze-night',
            'cloud-down',
            'cloud-up',
            'sun-hot'
        ], [
            'overcast',
            'overcast-day',
            'overcast-night',
            'overcast-drizzle',
            'overcast-day-drizzle',
            'overcast-night-drizzle',
            'overcast-fog',
            'overcast-day-fog',
            'overcast-night-fog',
            'overcast-hail',
            'overcast-day-hail',
            'overcast-night-hail',
            'overcast-haze',
            'overcast-day-haze',
            'overcast-night-haze',
            'overcast-rain',
            'overcast-day-rain',
            'overcast-night-rain',
            'overcast-sleet',
            'overcast-day-sleet',
            'overcast-night-sleet',
            'overcast-smoke',
            'overcast-day-smoke',
            'overcast-night-smoke',
            'overcast-snow',
            'overcast-day-snow',
            'overcast-night-snow'
        ], [
            'extreme',
            'extreme-day',
            'extreme-night',
            'extreme-drizzle',
            'extreme-day-drizzle',
            'extreme-night-drizzle',
            'extreme-fog',
            'extreme-day-fog',
            'extreme-night-fog',
            'extreme-hail',
            'extreme-day-hail',
            'extreme-night-hail',
            'extreme-haze',
            'extreme-day-haze',
            'extreme-night-haze',
            'extreme-rain',
            'extreme-day-rain',
            'extreme-night-rain',
            'extreme-sleet',
            'extreme-day-sleet',
            'extreme-night-sleet',
            'extreme-smoke',
            'extreme-day-smoke',
            'extreme-night-smoke',
            'extreme-snow',
            'extreme-day-snow',
            'extreme-night-snow'
        ], [
            'thunderstorms',
            'thunderstorms-day',
            'thunderstorms-night',
            'thunderstorms-rain',
            'thunderstorms-day-rain',
            'thunderstorms-night-rain',
            'thunderstorms-snow',
            'thunderstorms-day-snow',
            'thunderstorms-night-snow',
            'thunderstorms-overcast',
            'thunderstorms-day-overcast',
            'thunderstorms-night-overcast',
            'thunderstorms-overcast-rain',
            'thunderstorms-day-overcast-rain',
            'thunderstorms-night-overcast-rain',
            'thunderstorms-overcast-snow',
            'thunderstorms-day-overcast-snow',
            'thunderstorms-night-overcast-snow',
            'thunderstorms-extreme',
            'thunderstorms-day-extreme',
            'thunderstorms-night-extreme',
            'thunderstorms-extreme-rain',
            'thunderstorms-day-extreme-rain',
            'thunderstorms-night-extreme-rain',
            'thunderstorms-extreme-snow',
            'thunderstorms-day-extreme-snow',
            'thunderstorms-night-extreme-snow'
        ]] as const
    }, {
        label: 'Astronomical',
        icons: [[
            'horizon',
            'sunrise',
            'sunset',
            'moonrise',
            'moonset',
            'falling-stars',
            'solar-eclipse',
            'starry-night'
        ]] as const
    }, {
        label: 'Moon Phases',
        icons: [[
            'moon-new',
            'moon-waxing-crescent',
            'moon-first-quarter',
            'moon-waxing-gibbous',
            'moon-full',
            'moon-waning-gibbous',
            'moon-last-quarter',
            'moon-waning-crescent'
        ]] as const
    }, {
        label: 'Thermometer',
        icons: [[
            'thermometer',
            'thermometer-colder',
            'thermometer-warmer',
            'thermometer-celsius',
            'thermometer-fahrenheit',
            'thermometer-glass',
            'thermometer-glass-celsius',
            'thermometer-glass-fahrenheit',
            'thermometer-mercury',
            'thermometer-mercury-cold',
            'thermometer-sun',
            'thermometer-moon',
            'thermometer-raindrop',
            'thermometer-snow',
            'thermometer-water'
        ]] as const
    }, {
        label: 'Miscellaneous',
        icons: [[
            'barometer',
            'compass',
            'windsock',
            'windsock-weak',
            'humidity',
            'raindrop-measure',
            'tide-high',
            'tide-low',
            'pressure-high',
            'pressure-low',
            'pressure-high-alt',
            'pressure-low-alt',
            'celsius',
            'fahrenheit',
            'not-available',
            'snowman',
            'glove',
            'beanie',
            'rainbow',
            'rainbow-clear',
            'umbrella',
            'umbrella-wind',
            'umbrella-wind-alt',
            'wind-offshore',
            'wind-onshore'
        ]] as const
    }, {
        label: 'Particles',
        icons: [[
            'lightning-bolt',
            'raindrop',
            'raindrops',
            'snowflake',
            'star',
            'smoke-particles'
        ]] as const
    }, {
        label: 'Pollen',
        icons: [[
            'pollen',
            'pollen-flower',
            'pollen-grass',
            'pollen-tree'
        ]] as const
    }, {
        label: 'Beaufort Wind Scale',
        icons: [[
            'wind-beaufort-0',
            'wind-beaufort-1',
            'wind-beaufort-2',
            'wind-beaufort-3',
            'wind-beaufort-4',
            'wind-beaufort-5',
            'wind-beaufort-6',
            'wind-beaufort-7',
            'wind-beaufort-8',
            'wind-beaufort-9',
            'wind-beaufort-10',
            'wind-beaufort-11',
            'wind-beaufort-12'
        ]] as const
    }, {
        label: 'UV Index',
        icons: [[
            'uv-index',
            'uv-index-1',
            'uv-index-2',
            'uv-index-3',
            'uv-index-4',
            'uv-index-5',
            'uv-index-6',
            'uv-index-7',
            'uv-index-8',
            'uv-index-9',
            'uv-index-10',
            'uv-index-11'
        ]] as const
    }, {
        label: 'Time',
        icons: [[
            'time-night',
            'time-late-night',
            'time-morning',
            'time-late-morning',
            'time-afternoon',
            'time-late-afternoon',
            'time-evening',
            'time-late-evening'
        ]] as const
    }, {
        label: 'Alarm',
        icons: [[
            'code-green',
            'code-yellow',
            'code-orange',
            'code-red',
            'alert-avalanche-danger',
            'alert-falling-rocks',
            'wind-alert',
            'flag-gale-warning',
            'flag-small-craft-advisory',
            'flag-storm-warning',
            'flag-hurricane-warning'
        ]] as const
    }
];

export const iconCount = iconGroups.map(g => g.icons.flat().length).reduce((acc, val) => acc + val, 0)

export type IconGroup = {
    readonly label: string;
    readonly icons: string[][];
}

export type IconStyle = 'fill' | 'line';
export type IconStyles = { [key in IconStyle]: string; };

export type IconName = (typeof iconGroups)[number]['icons'][number][number]

export function getMeteoconsRemoteUrl(iconName: IconName, style: IconStyle = "fill") {
    return `https://raw.githubusercontent.com/basmilius/weather-icons/refs/heads/dev/production/${style}/svg/${iconName}.svg`
}

export function getMeteoconsUrl(iconName: IconName, style: IconStyle = "fill") {
    return `/meteocons/${style}/svg/${iconName}.svg`
}
