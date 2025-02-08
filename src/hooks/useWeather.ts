import { useQuery } from "@tanstack/react-query";
import { useSettings } from "./lively/use-settings";

export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: Record<keyof CurrentWeather, string>;
  current: CurrentWeather;
  hourly_units: Record<keyof HourlyData, string>;
  hourly?: HourlyData;
  daily_units: Record<keyof DailyData, string>;
  daily?: DailyData;
}

export interface CurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  is_day: number;
  weather_code: number;
  pressure_msl: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
}

export interface HourlyData {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  weather_code: number[];
}

export interface DailyData {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
}



export const useWeather = () => {
  // default: Gdańsk
  const latitude = useSettings("weather-widget-latitude", "54.3482907").toString()
  const longitude = useSettings("weather-widget-longitude", "18.6540233").toString()

  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    current: "temperature_2m,relative_humidity_2m,is_day,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m",
    hourly: "temperature_2m,relative_humidity_2m,weather_code",
    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset",
    timezone: "auto",
  });
  const apiEndpoint = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;

  const query = useQuery({
    queryKey: ['weather-data', latitude, longitude],
    queryFn: async () => {
      const data = await fetch(apiEndpoint)
        .then((r) => r.json())
      return data as WeatherApiResponse
    },
    staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
    refetchInterval: 1000 * 60 * 5, // Auto refetch every 5 minutes
  })



  // TODO: add auto-refresh every 5min
  // if fail - show stale data
  return query.data || null;
};