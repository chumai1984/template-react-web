import React from 'react';
import {connect} from 'dva';
import { Layout, Menu } from 'antd';
import router from 'umi/router'
import styles from './layout.scss';

const { Header, Content, Footer } = Layout;

class BasicLayout extends React.Component<any> {
  state = {
    current: '',
  };

  componentDidMount() {
    const {location} = this.props
    let {pathname} = location
    // 转换后是这样子的 ["", "content", "list"]
    let current = pathname.split('/')[1]
    this.setState({
      current
    })
  }

  handleClick = (menu) => {
    this.setState({
      current: menu.key
    })
    router.push(menu.path)
  };


  render() {
    const {children, route} = this.props
    const {routes} = route

    return (
      <div className={styles.containerWrap}>
        <Layout>
          {/*头部*/}
          <Header>
            <Menu selectedKeys={[this.state.current]} mode="horizontal">
              {
                routes && routes.map(menu => (
                  menu.key && <Menu.Item onClick={()=> this.handleClick(menu)} key={menu.key}>{menu.name}</Menu.Item>
                ))
              }
            </Menu>
          </Header>

          {/*内容区*/}
          <Content>
            <div className={styles.content}>
              {children}
            </div>
          </Content>

          {/*页脚*/}
          <Footer>
            <div className={styles.footer}>footer html</div>
          </Footer>
        </Layout>
      </div>
    );
  }
};

export default connect(({global, router}:any) => ({global, routing: router}))(BasicLayout);
