import initialFriends from "./Friends_db.jsx";

export function FriendsList() {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

export function Button({ children }) {
  return <button className="button">{children}</button>;
}

export function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>Friend Name</label>
      <input type="text" placeholder="Enter a name" required />

      <label>Image URL</label>
      <input type="text" placeholder="Enter a URL" required />

      <Button>Add Friend</Button>
    </form>
  );
}

export function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with xxxxx</h2>
      <label>Bill value</label>
      <input type="text" placeholder="Enter a value" required />

      <label>Your expense</label>
      <input type="text" placeholder="Enter a value" required />

      <label>XXXXX's expense</label>
      <input type="text" disabled placeholder="Enter a value" required />
      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">XXXXX</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FriendsList;
