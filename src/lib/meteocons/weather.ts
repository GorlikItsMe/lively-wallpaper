import { getMeteoconsUrl } from "@/lib/meteocons/icons"

interface WeatherIconConfig { day: { description: string, image: string }, night: { description: string, image: string } }

// source: https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c
export const weatherIcons: Record<string, WeatherIconConfig> = {
    "0": {
        "day": {
            "description": "Sunny",
            // "image": "http://openweathermap.org/img/wn/01d@4x.png"
            "image": getMeteoconsUrl("clear-day")
        },
        "night": {
            "description": "Clear",
            // "image": "http://openweathermap.org/img/wn/01n@4x.png"
            "image": getMeteoconsUrl("clear-night")
        }
    },
    "1": {
        "day": {
            "description": "Mainly Sunny",
            // "image": "http://openweathermap.org/img/wn/01d@4x.png"
            "image": getMeteoconsUrl("clear-day")
        },
        "night": {
            "description": "Mainly Clear",
            // "image": "http://openweathermap.org/img/wn/01n@4x.png"
            "image": getMeteoconsUrl("clear-night")
        }
    },
    "2": {
        "day": {
            "description": "Partly Cloudy",
            // "image": "http://openweathermap.org/img/wn/02d@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-day")
        },
        "night": {
            "description": "Partly Cloudy",
            // "image": "http://openweathermap.org/img/wn/02n@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-night")
        }
    },
    "3": {
        "day": {
            "description": "Cloudy",
            // "image": "http://openweathermap.org/img/wn/03d@4x.png"
            "image": getMeteoconsUrl("cloudy")
        },
        "night": {
            "description": "Cloudy",
            // "image": "http://openweathermap.org/img/wn/03n@4x.png"
            "image": getMeteoconsUrl("cloudy")
        }
    },
    "45": {
        "day": {
            "description": "Foggy",
            // "image": "http://openweathermap.org/img/wn/50d@4x.png"
            "image": getMeteoconsUrl("fog-day")
        },
        "night": {
            "description": "Foggy",
            // "image": "http://openweathermap.org/img/wn/50n@4x.png"
            "image": getMeteoconsUrl("fog-night")
        }
    },
    "48": {
        "day": {
            "description": "Rime Fog",
            // "image": "http://openweathermap.org/img/wn/50d@4x.png"
            "image": getMeteoconsUrl("haze-day")
        },
        "night": {
            "description": "Rime Fog",
            // "image": "http://openweathermap.org/img/wn/50n@4x.png"
            "image": getMeteoconsUrl("haze-night")
        }
    },
    "51": {
        "day": {
            "description": "Light Drizzle",
            // "image": "http://openweathermap.org/img/wn/09d@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-day-drizzle")
        },
        "night": {
            "description": "Light Drizzle",
            // "image": "http://openweathermap.org/img/wn/09n@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-night-drizzle")
        }
    },
    "53": {
        "day": {
            "description": "Drizzle",
            // "image": "http://openweathermap.org/img/wn/09d@4x.png"
            "image": getMeteoconsUrl("drizzle")
        },
        "night": {
            "description": "Drizzle",
            // "image": "http://openweathermap.org/img/wn/09n@4x.png"
            "image": getMeteoconsUrl("drizzle")
        }
    },
    "55": {
        "day": {
            "description": "Heavy Drizzle",
            // "image": "http://openweathermap.org/img/wn/09d@4x.png"
            "image": getMeteoconsUrl("drizzle")
        },
        "night": {
            "description": "Heavy Drizzle",
            // "image": "http://openweathermap.org/img/wn/09n@4x.png"
            "image": getMeteoconsUrl("drizzle")
        }
    },
    "56": {
        "day": {
            "description": "Light Freezing Drizzle",
            // "image": "http://openweathermap.org/img/wn/09d@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-day-hail")
        },
        "night": {
            "description": "Light Freezing Drizzle",
            // "image": "http://openweathermap.org/img/wn/09n@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-night-hail")
        }
    },
    "57": {
        "day": {
            "description": "Freezing Drizzle",
            // "image": "http://openweathermap.org/img/wn/09d@4x.png"
            "image": getMeteoconsUrl("sleet")
        },
        "night": {
            "description": "Freezing Drizzle",
            // "image": "http://openweathermap.org/img/wn/09n@4x.png"
            "image": getMeteoconsUrl("sleet")
        }
    },
    "61": {
        "day": {
            "description": "Light Rain",
            // "image": "http://openweathermap.org/img/wn/10d@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-day-rain")
        },
        "night": {
            "description": "Light Rain",
            // "image": "http://openweathermap.org/img/wn/10n@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-night-rain")
        }
    },
    "63": {
        "day": {
            "description": "Rain",
            // "image": "http://openweathermap.org/img/wn/10d@4x.png"
            "image": getMeteoconsUrl("rain")
        },
        "night": {
            "description": "Rain",
            // "image": "http://openweathermap.org/img/wn/10n@4x.png"
            "image": getMeteoconsUrl("rain")
        }
    },
    "65": {
        "day": {
            "description": "Heavy Rain",
            // "image": "http://openweathermap.org/img/wn/10d@4x.png"
            "image": getMeteoconsUrl("rain")
        },
        "night": {
            "description": "Heavy Rain",
            // "image": "http://openweathermap.org/img/wn/10n@4x.png"
            "image": getMeteoconsUrl("rain")
        }
    },
    "66": {
        "day": {
            "description": "Light Freezing Rain",
            // "image": "http://openweathermap.org/img/wn/10d@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-day-sleet")
        },
        "night": {
            "description": "Light Freezing Rain",
            // "image": "http://openweathermap.org/img/wn/10n@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-night-sleet")
        }
    },
    "67": {
        "day": {
            "description": "Freezing Rain",
            // "image": "http://openweathermap.org/img/wn/10d@4x.png"
            "image": getMeteoconsUrl("sleet")
        },
        "night": {
            "description": "Freezing Rain",
            // "image": "http://openweathermap.org/img/wn/10n@4x.png"
            "image": getMeteoconsUrl("sleet")
        }
    },
    "71": {
        "day": {
            "description": "Light Snow",
            // "image": "http://openweathermap.org/img/wn/13d@4x.png"
            "image": getMeteoconsUrl("snow")
        },
        "night": {
            "description": "Light Snow",
            // "image": "http://openweathermap.org/img/wn/13n@4x.png"
            "image": getMeteoconsUrl("snow")
        }
    },
    "73": {
        "day": {
            "description": "Snow",
            // "image": "http://openweathermap.org/img/wn/13d@4x.png"
            "image": getMeteoconsUrl("snow")
        },
        "night": {
            "description": "Snow",
            // "image": "http://openweathermap.org/img/wn/13n@4x.png"
            "image": getMeteoconsUrl("snow")
        }
    },
    "75": {
        "day": {
            "description": "Heavy Snow",
            // "image": "http://openweathermap.org/img/wn/13d@4x.png"
            "image": getMeteoconsUrl("snowflake")
        },
        "night": {
            "description": "Heavy Snow",
            // "image": "http://openweathermap.org/img/wn/13n@4x.png"
            "image": getMeteoconsUrl("snowflake")
        }
    },
    "77": {
        "day": {
            "description": "Snow Grains",
            // "image": "http://openweathermap.org/img/wn/13d@4x.png"
            "image": getMeteoconsUrl("snowflake")
        },
        "night": {
            "description": "Snow Grains",
            // "image": "http://openweathermap.org/img/wn/13n@4x.png"
            "image": getMeteoconsUrl("snowflake")
        }
    },
    "80": {
        "day": {
            "description": "Light Showers",
            // "image": "http://openweathermap.org/img/wn/09d@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-day-rain")
        },
        "night": {
            "description": "Light Showers",
            // "image": "http://openweathermap.org/img/wn/09n@4x.png"
            "image": getMeteoconsUrl("partly-cloudy-night-rain")
        }
    },
    "81": {
        "day": {
            "description": "Showers",
            // "image": "http://openweathermap.org/img/wn/09d@4x.png"
            "image": getMeteoconsUrl("rain")
        },
        "night": {
            "description": "Showers",
            // "image": "http://openweathermap.org/img/wn/09n@4x.png"
            "image": getMeteoconsUrl("rain")
        }
    },
    "82": {
        "day": {
            "description": "Heavy Showers",
            // "image": "http://openweathermap.org/img/wn/09d@4x.png"
            "image": getMeteoconsUrl("rain")
        },
        "night": {
            "description": "Heavy Showers",
            // "image": "http://openweathermap.org/img/wn/09n@4x.png"
            "image": getMeteoconsUrl("rain")
        }
    },
    "85": {
        "day": {
            "description": "Light Snow Showers",
            // "image": "http://openweathermap.org/img/wn/13d@4x.png"
            "image": getMeteoconsUrl("snow")

        },
        "night": {
            "description": "Light Snow Showers",
            // "image": "http://openweathermap.org/img/wn/13n@4x.png"
            "image": getMeteoconsUrl("snow")
        }
    },
    "86": {
        "day": {
            "description": "Snow Showers",
            // "image": "http://openweathermap.org/img/wn/13d@4x.png"
            "image": getMeteoconsUrl("snowflake")
        },
        "night": {
            "description": "Snow Showers",
            // "image": "http://openweathermap.org/img/wn/13n@4x.png"
            "image": getMeteoconsUrl("snowflake")
        }
    },
    "95": {
        "day": {
            "description": "Thunderstorm",
            // "image": "http://openweathermap.org/img/wn/11d@4x.png"
            "image": getMeteoconsUrl("thunderstorms-day")
        },
        "night": {
            "description": "Thunderstorm",
            // "image": "http://openweathermap.org/img/wn/11n@4x.png"
            "image": getMeteoconsUrl("thunderstorms-night")
        }
    },
    "96": {
        "day": {
            "description": "Light Thunderstorms With Hail",
            // "image": "http://openweathermap.org/img/wn/11d@4x.png"
            "image": getMeteoconsUrl("thunderstorms-day-snow")
        },
        "night": {
            "description": "Light Thunderstorms With Hail",
            // "image": "http://openweathermap.org/img/wn/11n@4x.png"
            "image": getMeteoconsUrl("thunderstorms-night-snow")
        }
    },
    "99": {
        "day": {
            "description": "Thunderstorm With Hail",
            // "image": "http://openweathermap.org/img/wn/11d@4x.png"
            "image": getMeteoconsUrl("thunderstorms-rain")
        },
        "night": {
            "description": "Thunderstorm With Hail",
            // "image": "http://openweathermap.org/img/wn/11n@4x.png"
            "image": getMeteoconsUrl("thunderstorms-rain")
        }
    }
}


export function getWeatherIcon(weather_code: number): WeatherIconConfig | undefined {
    const d = weatherIcons[weather_code.toString()]
    return d
}