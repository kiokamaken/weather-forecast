export interface LocationBase {
  title: string;
  location_type: string;
  latt_long: string;
  woeid: number;
  distance?: number;
}

export interface WeatherBase {
  readonly id: number;
  created: string;
  applicable_date: string;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_speed: number;
  wind_direction: number;
  wind_direction_compass: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface Source {
  title: string;
  url: string;
  slug?: string;
  crawl_rate?: number;
}

export interface Location extends LocationBase {
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  timezone: string;
  parent: LocationBase;
  consolidated_weather: WeatherBase[];
  sources: Source[];
}
