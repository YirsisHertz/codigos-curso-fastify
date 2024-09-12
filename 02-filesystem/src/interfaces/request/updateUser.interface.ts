export interface UpdateUserParams {
  id: string;
}

export interface UpdateUserBody {
  first_name?: string;
  last_name?: string;
  country?: string;
  email?: string;
  favorite_color?: string;
  followers?: number;
  username?: string;
  website?: string;
  zodiac_sign?: string;
}
