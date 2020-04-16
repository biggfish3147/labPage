import { Layout, Carousel } from 'antd';
import style from './index.css';

const { Header, Footer, Content } = Layout;


function BasicLayout(props) {
  return (
    // <div className={styles.normal}>
    //   <h1 className={styles.title}>Hi! Welcome to 808!</h1>
    //   {props.children}
    // </div>
    <div>
      <Layout>
        <Header className={ style.header }>
          Hi! Welcome to 808!
        </Header>
        <Content className={ style.content }>
          <Carousel autoplay className={ style.carousel }>
            <div>1深度学习nb啊</div>
            <div>2pacs是啥啊</div>
            <div>3ocr教教我把</div>
          </Carousel>
          { props.children }
        </Content>
        <Footer className={ style.footer }>
          北京邮电大学深度学习小组©2020
        </Footer>
      </Layout>
    </div>
  );
}

export default BasicLayout;
