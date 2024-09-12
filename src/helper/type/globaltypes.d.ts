type ResponseUserType = {
  data: {
    success: boolean;
    message: string;
    total_users: number;
    offset: number;
    limit: number;
    users: {
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      street: string;
      state: string;
      country: string;
      longitude: number;
      profile_picture: string;
      gender: string;
      id: number;
      date_of_birth: string;
      job: string;
      city: string;
      zipcode: string;
      latitude: number;
    }[];
  };
};