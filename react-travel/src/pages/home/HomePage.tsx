import React from 'react';
import { Header, Footer, SideMenu, Carousel } from '../../components'
import { Row, Col } from 'antd'
import styles from "./HomePage.module.css";


export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles['page-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    )
  }
}