import post1Photo from "../img/1.jpg";
import post2Photo from "../img/3.jpg";
import post3Photo from "../img/5.jpg";
import profile1Photo from "../img/2.jpg";
import profile2Photo from "../img/4.jpg";
import profile3Photo from "../img/6.jpg";

const initialState = {
  authors: ["The Pupa", "Korvo", "Yumyulack"],
  authorsPic: [profile1Photo, profile2Photo, profile3Photo],
  nicknames: ["@pupapupa", "@korvothefirst", "@yumyulack777"],
  date: ["29 лип. 23", "28 лип. 23", "25 лип. 23"],
  contentText: [
    "Those who know, do. Those that understand, teach.",
    "Never leave the house without an amulet that's been blessed by a witch.",
    "Don’t ever let anyone convince you that you don’t like what you like.",
  ],
  contentPic: [post1Photo, post2Photo, post3Photo],
  likesAmount: [99, 85, 85],
  commentsAmount: [15, 13, 10],
  repostAmount: [6, 9, 3],
};

const ADD_POST = "ADD_POST";

export const reducer = (state = initialState, action) => {
  console.log(action.contentText);
  switch (action.type) {
    case ADD_POST:
      const newLikesAmount = Math.floor(Math.random() * 100);
      const newCommentsAmount = Math.floor(Math.random() * 50);
      const newSharesAmount = Math.floor(Math.random() * 10);
      const newDate = new Date();
      return {
        ...state,
        authors: [...state.authors, action.nickname],
        authorsPic: [...state.authorsPic, action.profilePic],
        nicknames: [...state.nicknames, action.userName],
        date: [...state.date, newDate.toDateString()],
        contentPic: [...state.contentPic, action.contentPic],
        contentText: [...state.contentText, action.contentText],
        likesAmount: [...state.likesAmount, newLikesAmount],
        commentsAmount: [...state.commentsAmount, newCommentsAmount],
        repostAmount: [...state.repostAmount, newSharesAmount],
      };

    default:
      return state;
  }
};
