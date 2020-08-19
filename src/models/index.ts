export interface LocationBase {
  title: string;
  location_type: string;
  latt_long: number;
  woeid: number;
  distance?: number;
}

export interface WeatherBase {
  readonly id: number;
  applicable_date: string;
  weather_state_name: string;		
  weather_state_abbr: string;
  wind_speed: number;	
  wind_direction: number;	
  wind_direction_compass:	string;
  min_temp: number;
  max_temp: number;
  the_temp: number;	
  air_pressure:	number;	
  humidity: number;	
  visibility: number;	
  predictability: number;
}

export interface Location extends LocationBase {
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  parent: LocationBase;
  consolidated_weather: WeatherBase[];
  sources: {
    title: string;
    url: string;
  }
}
