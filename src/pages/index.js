import styles from './index.css';
import { Button } from 'antd';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          <Button type="primary">点一下看看</Button>
        </li>
      </ul>
    </div>
  );
}
