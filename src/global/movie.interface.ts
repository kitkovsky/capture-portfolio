interface Award {
  title: string;
  description: string;
}

interface Movie {
  title: string;
  mainImgUrl: string;
  secondaryImgUrl: string;
  url: string;
  awards: Award[];
}

export default Movie;
