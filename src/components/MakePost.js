import { useDispatch } from "react-redux";
import { useState } from "react";
import "./MakePost.css";

export const MakePost = () => {
  const [nickname, setNickname] = useState("");
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [contentPic, setContentPic] = useState("");
  const [contentText, setContentText] = useState("");
  const dispatch = useDispatch();

  const handlePost = () => {
    const action = {
      type: "ADD_POST",
      nickname,
      userName,
      profilePic,
      contentPic,
      contentText,
    };
    dispatch(action);
    setNickname('');
    setUserName('');
    setProfilePic('');
    setContentPic('');
    setContentText('');
  };

  return (
    <>
      <div className="post__form-wrapper">
        <form className="post__form" action="#">
          <label htmlFor="nickname">Nickname</label>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            id="nickname"
            type="text"
            name="nickname"
            required
          />

          <label htmlFor="userName">@username</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="userName"
            type="text"
            name="userName"
            required
          />

          <label htmlFor="profilePic">Profile picture URL</label>
          <input
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            id="profilePic"
            type="text"
            name="profilePic"
            required
          />

          <label htmlFor="contentPic">Content picture URL</label>
          <input
            value={contentPic}
            onChange={(e) => setContentPic(e.target.value)}
            id="contentPic"
            type="text"
            name="contentPic"
            required
          />

          <label htmlFor="contentText">Post</label>
          <textarea
            value={contentText}
            onChange={(e) => setContentText(e.target.value)}
            id="contentText"
            type="text"
            name="contentText"
            required
            rows={5}
            cols={30}
          />
        </form>
        <button type="submit" onClick={handlePost}>
          Add post
        </button>
      </div>
    </>
  );
};
