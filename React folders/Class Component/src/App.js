import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';
import ErrorBondary from './components/ErrorBoundary';
const DUMMY_USERS = [
  { id: 'c1', name: 'Gabi' },
  { id: 'c2', name: 'Ana' },
  { id: 'c3', name: 'Rebeca' },
  { id: 'c4', name: 'Laura' },
  { id: 'c5', name: 'Andreea' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };
  return (
    <ErrorBondary>
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    </ErrorBondary>
  );
}

export default App;
