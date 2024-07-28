import axios, { AxiosResponse } from "axios";
/**
 * Player Object
 */
export interface IPlayer {
  firstname: string;
  lastname: string;
  birthday: string;
}

/**
 * Collection item
 */
export interface ICollection {
  id: number;
  player: IPlayer;
}

export type ApiRequest<T> = AxiosResponse<T>;

export function fetchCollection(): Promise<ApiRequest<ICollection[]>> {
  return axios.get("http://localhost:8001/cards");
}

export function addCard(data): Promise<ApiRequest<ICollection[]>> {
  return axios.post("http://localhost:8001/cards", data);
}
