// import initialFriends from "./Friends_db.jsx";
import {
  FormAddFriend,
  FriendsList,
  FormSplitBill,
  Button,
} from "./FriendsList.jsx";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill></FormSplitBill>
    </div>
  );
}

export default App;
