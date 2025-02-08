import {
  CircleXIcon,
  // DropletsIcon,
  GaugeIcon,
  MoveUpIcon,
  SunriseIcon,
  SunsetIcon,
  LoaderCircleIcon,
} from "lucide-react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import MoveableWidget from "../widgets-utils/moveable-widget";
import { memo, useEffect, useState } from "react";
import { useWeather, WeatherApiResponse } from "@/hooks/useWeather";
import { getWeatherIcon } from "@/lib/meteocons/weather";
import { useIntervalWhen } from "@/hooks/useIntervalWhen";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { useLanguage } from "@/hooks";
// import { getMeteoconsUrl } from "@/lib/meteocons/icons";

function WeatherData() {
  const data = useWeather();

  if (!data) {
    return (
      <Card className="w-[300px]">
        <CardHeader className="p-3">
          <CardTitle className="flex items-center justify-between">
            <LoaderCircleIcon className="h-5 w-5 animate-spin" />
            <div>Loading Weather...</div>
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }
  return <WeatherWidgetContext {...data} />;
}

const useTimeOfDay = () => {
  function getIsDay() {
    const dt = new Date();
    const _isDay = dt.getHours() >= 6 && dt.getHours() < 19;
    return _isDay;
  }
  const [timeOfDay, setTimeOfDay] = useState<"day" | "night">(
    getIsDay() ? "day" : "night"
  );
  useEffect(() => {
    let cached_timeOfDay = timeOfDay;
    const l = setInterval(() => {
      const new_timeOfDay = getIsDay() ? "day" : "night";
      if (cached_timeOfDay != new_timeOfDay) {
        cached_timeOfDay = new_timeOfDay;
        setTimeOfDay(new_timeOfDay);
      }
    }, 1000);
    return () => clearInterval(l);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return timeOfDay;
};

function WeatherWidgetContext(props: WeatherApiResponse) {
  const [timer, setTimer] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [modeSwitch, setModeSwitch] = useState(false);

  useIntervalWhen(
    () => {
      // switch after 10 sek
      if (timer < 10) {
        setTimer((c) => c + 1);
      } else {
        setTimer(0);
        setModeSwitch((c) => !c);
      }
    },
    { ms: 1000, when: !isHovering, startImmediately: true }
  );

  useEffect(() => {
    setTimer(0);
  }, [isHovering]);

  return (
    <Card
      className="w-[300px] h-[140px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setModeSwitch(!modeSwitch)}
    >
      <ForecastNext5Days {...props} isShowing={modeSwitch} />
      <ForecastNow {...props} isShowing={!modeSwitch} />
    </Card>
  );
}

const ForecastNext5Days = memo(
  ({
    daily,
    daily_units,
    isShowing,
  }: WeatherApiResponse & { isShowing: boolean }) => {
    const language = useLanguage();
    const timeOfDay = useTimeOfDay();
    const first5Days = Object.keys(daily?.time || [])
      .slice(0, 5)
      .map((_, i) => ({
        time: daily?.time[i] as string,
        weather_code: daily?.weather_code[i] as number,
        temperature_2m_max: daily?.temperature_2m_max[i] as number,
        temperature_2m_min: daily?.temperature_2m_min[i] as number,
        sunrise: daily?.sunrise[i] as string,
        sunset: daily?.sunset[i] as string,
      }));
    return (
      <CardHeader
        className={cn(
          "p-1 absolute top-0 left-0 transition-opacity w-[300px] h-[140px]",
          isShowing ? "opacity-100" : "opacity-0"
        )}
      >
        <CardTitle className="flex items-center justify-between h-full">
          {first5Days.map((d, index) => {
            const isSunday = new Date(d.time).getDay() == 0;
            const wIcon = getWeatherIcon(d.weather_code);
            const dayShortName = capitalizeFirstLetter(
              new Date(d.time).toLocaleDateString(language, {
                weekday: "short",
              })
            );

            return (
              <div
                key={d.time}
                className={cn(
                  "flex flex-col items-center gap-0 rounded-md h-full justify-center",
                  index == 0 && "bg-gray-500/20", // mark today
                  isSunday && "bg-red-500/20" // mark sunday
                )}
              >
                <div>{dayShortName}</div>
                {wIcon ? (
                  <img
                    src={wIcon?.[timeOfDay].image}
                    alt={wIcon?.[timeOfDay].description}
                    className="h-14 w-14"
                  />
                ) : (
                  <div>weather_code: {d.weather_code}</div>
                )}
                <div className="text-xs">
                  {Math.round(d.temperature_2m_max)}{" "}
                  {daily_units.temperature_2m_max}
                </div>
                <div className="text-xs opacity-70">
                  {Math.round(d.temperature_2m_min)}{" "}
                  {daily_units.temperature_2m_min}
                </div>
              </div>
            );
          })}
        </CardTitle>
      </CardHeader>
    );
  }
);

const ForecastNow = memo(
  ({
    current,
    current_units,
    daily,
    isShowing,
  }: WeatherApiResponse & { isShowing: boolean }) => {
    const language = useLanguage();
    const { sunrise, sunset } = {
      sunrise: daily?.sunrise[0],
      sunset: daily?.sunset[0],
    };
    const timeOfDay = useTimeOfDay();
    const wIcon = getWeatherIcon(current.weather_code);
    const dayFullName = capitalizeFirstLetter(
      new Date().toLocaleDateString(language, { weekday: "long" })
    );

    return (
      <CardHeader
        className={cn(
          "p-3 absolute top-0 left-0 transition-opacity w-[300px] h-[140px]",
          isShowing ? "opacity-100" : "opacity-0"
        )}
      >
        <CardTitle className="flex items-center justify-between h-full">
          {wIcon ? (
            <div className="flex items-center justify-between flex-col w-1/3">
              {/* <div>{dayName.long}</div> */}
              <div>{dayFullName}</div>
              <img
                src={wIcon?.[timeOfDay].image}
                alt={wIcon?.[timeOfDay].description}
              />
              <div className="text-center text-sm">
                {wIcon?.[timeOfDay].description}
              </div>
            </div>
          ) : (
            <CircleXIcon className="h-16 w-16" />
          )}

          <div className="flex flex-col items-center justify-between gap-1 text-xs w-2/3">
            <div className="text-4xl mb-4">
              {Math.round(current?.temperature_2m)}{" "}
              {current_units.temperature_2m}
            </div>

            {/* {current?.relative_humidity_2m && (
              <div className="flex gap-2 items-center">
                <DropletsIcon className="h-4 w-4" />
                <div>
                  {current?.relative_humidity_2m}{" "}
                  {current_units.relative_humidity_2m}
                </div>
              </div>
            )} */}

            <div className="flex gap-2 items-center">
              {current?.wind_speed_10m && (
                <>
                  <MoveUpIcon
                    className="h-4 w-4 rotate-0"
                    style={{
                      // @ts-ignore: This key is ok.
                      "--tw-rotate": `${Math.round(
                        current.wind_direction_10m
                      )}deg`,
                    }}
                  />
                  <div>
                    {current?.wind_speed_10m} {current_units.wind_speed_10m}
                  </div>
                </>
              )}

              {current?.pressure_msl && (
                <>
                  <GaugeIcon className="h-4 w-4" />
                  <div>
                    {current?.pressure_msl} {current_units.pressure_msl}
                  </div>
                </>
              )}
            </div>

            {sunrise && sunset && (
              <div className="flex gap-2 items-center">
                <SunriseIcon className="h-4 w-4" />
                <div className="me-2">
                  {new Date(sunrise).toLocaleTimeString("pl", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <SunsetIcon className="h-4 w-4" />
                <div>
                  {new Date(sunset).toLocaleTimeString("pl", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            )}
          </div>
        </CardTitle>
      </CardHeader>
    );
  }
);

export default function WeatherWidget() {
  return (
    <MoveableWidget id="weather-widget">
      <WeatherData />
    </MoveableWidget>
  );
}
