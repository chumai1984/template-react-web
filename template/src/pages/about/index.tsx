import React from 'react';
import { connect } from "dva";
import styles from './index.scss';

class searchView extends React.Component<any>{
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.aboutWrap}>about html~</div>
    );
  }
}

export default connect(({ loading }: any) => ({ loading }))(searchView)
