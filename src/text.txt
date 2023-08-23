
import './App.css'; 
import { Post } from './components/Post';
import post1Photo from './img/1.jpg';
import post2Photo from './img/3.jpg';
import post3Photo from './img/6.jpg';
import profile1Photo from './img/2.jpg';
import profile2Photo from './img/4.jpg';
import profile3Photo from './img/5.jpg';
import comment from './img/comment.png';
import like from './img/like.png';
import share from './img/share.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitterskyi</h1>
      </header>
      <div className='posts'>
        <Post author={{
          name: "The Pupa",
          photo: profile1Photo,
          nickname: "@pupapupa"
        }}
        content="Those who know, do. Those that understand, teach."
        image={post1Photo}
        date={"29 лип. 23"}
        buttons={{
          commentBut: comment,
          likeBut: like,
          shareBut: share,
          commentAmount: "15",
          likeAmount: "99",
          shareAmount: "6"
        }}
        />
        <Post author={{
          name: "Korvo",
          photo: profile2Photo,
          nickname: "@korvothefirst"
        }}
        content="Never leave the house without an amulet that's been blessed by a witch."
        image={post2Photo}
        date={"28 лип. 23"}
        buttons={{
          commentBut: comment,
          likeBut: like,
          shareBut: share,
          commentAmount: "13",
          likeAmount: "85",
          shareAmount: "9"
        }}
        />
        <Post author={{
          name: "Yumyulack",
          photo: profile3Photo,
          nickname: "@yumyulack777"
        }}
        content="Don’t ever let anyone convince you that you don’t like what you like."
        image={post3Photo}
        date={"25 лип. 23"}
        buttons={{
          commentBut: comment,
          likeBut: like,
          shareBut: share,
          commentAmount: "10",
          likeAmount: "85",
          shareAmount: "3"
        }}
        />
      </div>
    </div>
  );
}

export default App;
