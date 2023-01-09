import Card from '../UI/Card';
import classes from './AddUser.module.css';
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.user.map((user) => (
          <li key={user.id}>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
