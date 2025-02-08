export type TShow = {
  id: number;
  image: {
    medium: string;
  };
  name: string;
  rating: {
    average: number;
  };
};

export type TShowDetails = {
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  genres: string[];
  rating: {
    average: number;
  };
  summary: string;
};
