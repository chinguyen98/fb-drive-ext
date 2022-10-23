import { useAuthContext } from 'context/AuthContext';
import styles from './_app.module.scss';

function App() {
  const { accessToken } = useAuthContext();

  return <div className={styles['container']}>Access token: {accessToken}</div>;
}

export default App;
