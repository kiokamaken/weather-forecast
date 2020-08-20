import request from 'utils/request';
import { LocationBase } from 'models';

const API_ENDPOINT = '/api';

export const searchLocation = (search: string, isLattLong?: boolean) => {
  const query = `${API_ENDPOINT}/location/search?${
    isLattLong ? 'lattlong' : 'query'
  }=${search}`;
  return request.get<LocationBase[]>(query);
};

export const getForecastById = (id: string) => {
  const query = `${API_ENDPOINT}/location/${id}`;
  return request.get<Location>(query);
};
