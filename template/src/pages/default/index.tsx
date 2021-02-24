import React from 'react';
import styles from './index.scss';
import { connect } from 'dva';
import { Button, Spin, Divider } from 'antd';
import { WIcon } from '@/utils/tool';
import router from 'umi/router';
import Link from 'umi/link';
import Cookies from 'js-cookie';

import BreadCrumbs from '../components/BreadCrumbs';
import PptList from '../components/PptList';
import PptView from '../components/PptView';


class contentView extends React.Component<any> {
  state = {};

  componentDidMount() {
  }

  // eg:reducers
  changeReduces = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'content/updateState',
      payload: {
        cc: `change CCCCCCCCCCCCC${new Date().getTime()}`,
        dd: `改变后的dd${new Date().getTime()}`,
      },
    });
  };

  // eg:getList
  getUserInfo = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'content/getUserInfo',
      payload: {
        token: Cookies.get('token'),
      },
    });
  };

  // 路由跳转
  jump = (id) => {
    router.push(`/content/${id}`);
  };


  render() {
    const { content, loading } = this.props;
    const { cc, dd, userInfo } = content;

    // 面包屑参数
    const BreadProps = {
      title: '面包屑',
      isShow: false,
    };

    // pptList参数
    const PptListProps = {
      title: 'ppt列表',
      list: [1, 2],
    };

    // pptView参数
    const PptViewProps = {
      title: 'ppt预览',
    };

    return (
      <div className={styles.contentWrap}>

        <Divider>路由跳转demo</Divider>
        <div>
          <Button onClick={() => this.jump(23)} type={'primary'}>script跳转</Button> &nbsp;
          <Link to={`/content/38`}><Button type={'primary'}>link跳转</Button></Link>
        </div>

        <Divider>Icon Demo</Divider>
        <div>
          <WIcon type='iconclose'></WIcon>&nbsp;&nbsp;
          <WIcon type='iconbianji'></WIcon>&nbsp;&nbsp;
          <WIcon type='iconsimi' className='f16' style={{ color: 'red' }}></WIcon>&nbsp;&nbsp;
        </div>

        <Divider>数据流 Demo</Divider>
        <Button onClick={this.changeReduces} type={'primary'}>改变reducers</Button>
        <div>{cc}</div>
        <div>{dd}</div><br/>
        <Button onClick={this.getUserInfo} type={'primary'}>数据交互流程</Button>
        {
          loading.effects['content/getUserInfo'] && <Spin/>
        }
        <div>{userInfo.Account} - {userInfo.ID} - {userInfo.Name}</div>

        <Divider>组件及组件传参 Demo</Divider>
        <div>
          <BreadCrumbs {...BreadProps} />
          <PptList {...PptListProps} />
          <PptView {...PptViewProps} />
        </div>

      </div>
    );
  }
}

export default connect(({ content, loading }: any) => ({ content, loading }))(contentView);
