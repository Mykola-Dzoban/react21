import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import comment from "../img/comment.png";
import like from "../img/like.png";
import share from "../img/share.png";
import { Post } from "../components/Post";
import {
  authorsSelector,
  authorsPicSelector,
  nicknamesSelector,
  contentPicSelector,
  dateSelector,
  contentTextSelector,
  likesAmountSelector,
  commentsAmountSelector,
  repostAmountSelector,
} from "../store/selector";

const makePost = (
  authors,
  authorsPic,
  nicknames,
  contentPic,
  date,
  contentText,
  likesAmount,
  commentsAmount,
  repostAmount
) => {
  const post = [];
  for (let i = 0; i < authors.length; i++) {
    let uniqueKey = uuidv4();
    post.push(
      <>
        <Post
          key={uniqueKey}
          author={{
            name: authors[i],
            photo: authorsPic[i],
            nickname: nicknames[i],
          }}
          content={contentText[i]}
          image={contentPic[i]}
          date={date[i]}
          buttons={{
            commentBut: comment,
            likeBut: like,
            shareBut: share,
            commentAmount: commentsAmount[i],
            likeAmount: likesAmount[i],
            shareAmount: repostAmount[i],
          }}
        />
      </>
    );
  }
  return post;
};

export const Home = () => {
  const authors = useSelector(authorsSelector);
  const authorsPic = useSelector(authorsPicSelector);
  const nicknames = useSelector(nicknamesSelector);
  const contentPic = useSelector(contentPicSelector);
  const date = useSelector(dateSelector);
  const contentText = useSelector(contentTextSelector);
  const likesAmount = useSelector(likesAmountSelector);
  const commentsAmount = useSelector(commentsAmountSelector);
  const repostAmount = useSelector(repostAmountSelector);
  return (
    <>
      <div className="posts-wrapper">
        {makePost(
          authors,
          authorsPic,
          nicknames,
          contentPic,
          date,
          contentText,
          likesAmount,
          commentsAmount,
          repostAmount
        )}
      </div>
    </>
  );
};
