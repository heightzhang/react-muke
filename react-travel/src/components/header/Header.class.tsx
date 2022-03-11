import React from "react";
import styles from './Header.module.css'
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps } from "react-router-dom";
import store from '../../redux/store'
import { languageState } from '../../redux/languageReducer'
import { withTranslation, WithTranslation } from "react-i18next";


interface state extends languageState { }

class HeaderComponent extends React.Component<RouteComponentProps & WithTranslation, state> {
  constructor(props: any) {
    super(props)
    const storeState = store.getState()
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList
    }
    console.log('store', this.state)
    // 订阅
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    // 获取更新后的数据 
    const storeState = store.getState()
    this.setState({
      language: storeState.language,
      languageList: storeState.languageList
    })
  }

  menuClickHandler = (e: any) => {
    console.log('e', e)
    if (e.key === 'new') {
      const action = {
        type: 'add_language',
        payload: { code: 'new_lang', name: '新语言' }
      }
      store.dispatch(action)
    } else {
      const action = {
        type: 'change_language',
        payload: e.key
      }
      store.dispatch(action)
    }
  }

  render() {
    const { history, t } = this.props
    return (
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text>{t('header.slogan')}</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={this.menuClickHandler}>
                  {this.state.languageList.map((l) => {
                    return (<Menu.Item key={l.code}>{l.name}</Menu.Item>)
                  })}
                  <Menu.Item key={'new'}>                    {t("header.add_new_language")}
                  </Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}>
              {this.state.languageList.find(l => l.code === this.state.language)?.name}
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push('/register')}>                {t("header.register")}
              </Button>
              <Button onClick={() => history.push('/signIn')}>{t("header.signin")}</Button>
            </Button.Group>
          </div>
        </div>

        {/* main-header */}
        <Layout.Header className={styles['main-header']}>
          <span onClick={() => history.push('/')}>
            <img src={logo} className={styles['App-logo']} alt="" />
            <Typography.Title level={3} className={styles.title}>
              React旅游网
            </Typography.Title>
          </span>

          <Input.Search placeholder={'请输入旅游目的地、主题、或关键字'} className={styles['search-input']} />
        </Layout.Header>

        {/* main-menu */}
        <Menu mode={'horizontal'} className={styles['main-menu']}>
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key="4"> 自由行 </Menu.Item>
          <Menu.Item key="5"> 私家团 </Menu.Item>
          <Menu.Item key="6"> 邮轮 </Menu.Item>
          <Menu.Item key="7"> 酒店+景点 </Menu.Item>
          <Menu.Item key="8"> 当地玩乐 </Menu.Item>
          <Menu.Item key="9"> 主题游 </Menu.Item>
          <Menu.Item key="10"> 定制游 </Menu.Item>
          <Menu.Item key="11"> 游学 </Menu.Item>
          <Menu.Item key="12"> 签证 </Menu.Item>
          <Menu.Item key="13"> 企业游 </Menu.Item>
          <Menu.Item key="14"> 高端游 </Menu.Item>
          <Menu.Item key="15"> 爱玩户外 </Menu.Item>
          <Menu.Item key="16"> 保险 </Menu.Item>
        </Menu>

      </div>
    )
  }
}

export const Header = withTranslation()(withRouter(HeaderComponent))