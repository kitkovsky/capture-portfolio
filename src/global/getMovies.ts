import athlete from "../img/athlete-small.png";
import athlete2 from "../img/athlete2.png";
import goodtimes from "../img/goodtimes-small.png";
import goodtimes2 from "../img/good-times2.jpg";
import theracer from "../img/theracer-small.png";
import theracer2 from "../img/the-racer2.jpg";
import IMovie from "./movie.interface";

const getMovies = (): IMovie[] => {
  return [
    {
      title: "The Athlete",
      mainImgUrl: athlete,
      secondaryImgUrl: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly a masterpiece.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "It's okay lmao.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
    {
      title: "Good Times",
      mainImgUrl: goodtimes,
      url: "/work/good-times",
      secondaryImgUrl: goodtimes2,
      awards: [
        {
          title: "Truly a masterpiece.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "It's okay lmao.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
    {
      title: "The Racer",
      mainImgUrl: theracer,
      url: "/work/the-racer",
      secondaryImgUrl: theracer2,
      awards: [
        {
          title: "Truly a masterpiece.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          title: "Its okay lmao.",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
  ];
};

export default getMovies;
