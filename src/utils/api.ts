import { API_BASE } from '../enviroments';

export interface ApiResponse<Data, Error = any> {
  loading: boolean;
  data: Data;
  error: Error;
}

export async function getDataFromAPI<Data>(endpoint: string): Promise<Data> {
  try {
    const response = await fetch(`${API_BASE}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Status code = ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function sendDataToAPI<Body, Data = Body>(
  endpoint: string,
  body: Body,
  method: string = 'POST'
): Promise<Data> {
  try {
    const response = await fetch(`${API_BASE}/${endpoint}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error(`Status code = ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}
