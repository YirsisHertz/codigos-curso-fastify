export interface FindUserByIdParams {
  id: string;
}

export interface FindUsersByZodiacSignParams {
  zodiac_sign: string;
}

export interface FindUsersByZodiacSignQueryParams {
  limit: number;
  page: number;
}
