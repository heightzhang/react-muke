import React from 'react';
import logo from './assets/images/logo.svg'
// import './App.css';
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from './components/ShoppingCart'


interface Props {

}

interface State {
  robotGallery: any[],
  count: number
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json()
      })
      .then((data) => this.setState({ robotGallery: data }))
  }

  render() {
    return (
      <div className={styles.app}>
        {/* 标题 */}
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo"></img>
          <h1>标题要长</h1>
        </div>

        {/* 添加数量 */}
        <button onClick={() => {
          // this.setState({ count: this.state.count + 1 }, () => {
          //   console.log('count', this.state.count)
          // })
          // count 0
          this.setState((preState, preProps) => {
            return { count: preState.count + 1 }
          }, () => {
            console.log('count-3', this.state.count) // 2
          })
          console.log('count-1', this.state.count) // 0
          this.setState((preState, preProps) => {
            return { count: preState.count + 1 }
          }, () => {
            console.log('count-4', this.state.count) // 2
          })
          // console.log('count-2', this.state.count) // 0
        }}>Click</button>
        <span>count: {this.state.count}</span>

        {/* 购物车 */}
        <ShoppingCart></ShoppingCart>

        {/* 列表 */}
        <div className={styles.robotList}>
          <div className={styles.robotList}>
            {this.state.robotGallery.map((r: any) => (
              <Robot id={r.id} email={r.email} name={r.name}></Robot>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
