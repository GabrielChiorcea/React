import { Fragment, Component } from 'react';
import UsersContext from '../store/users-context';
import Users from './Users';
import classes from './UserFinder.module.css';
import ErrorBondary from './ErrorBoundary';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <ErrorBondary>
          <div className={classes.finder}>
            <input
              type="search"
              onChange={this.searchChangeHandler.bind(this)}
            />
          </div>
        </ErrorBondary>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
