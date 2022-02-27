import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg'
// import './App.css';
// import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from './components/ShoppingCart'
import RobotDicount from './components/RobotDiscount'




interface Props {

}

interface State {
  robotGallery: any[],
  count: number
}

//  类组件写法

// class App extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props)
//     this.state = {
//       robotGallery: [],
//       count: 0
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json()
//       })
//       .then((data) => this.setState({ robotGallery: data }))
//   }

//   render() {
//     return (
//       <div className={styles.app}>
//         {/* 标题 */}
//         <div className={styles.appHeader}>
//           <img src={logo} className={styles.appLogo} alt="logo"></img>
//           <h1>标题要长</h1>
//         </div>

//         {/* 添加数量 */}
//         <button onClick={() => {
//           // this.setState({ count: this.state.count + 1 }, () => {
//           //   console.log('count', this.state.count)
//           // })
//           // count 0
//           this.setState((preState, preProps) => {
//             return { count: preState.count + 1 }
//           }, () => {
//             console.log('count-3', this.state.count) // 2
//           })
//           console.log('count-1', this.state.count) // 0
//           this.setState((preState, preProps) => {
//             return { count: preState.count + 1 }
//           }, () => {
//             console.log('count-4', this.state.count) // 2
//           })
//           console.log('count--2', this.state.count) // 0
//         }}>Click</button>
//         <span>count: {this.state.count}</span>

//         {/* 购物车 */}
//         <ShoppingCart></ShoppingCart>

//         {/* 列表 */}
//         <div className={styles.robotList}>
//           <div className={styles.robotList}>
//             {this.state.robotGallery.map((r: any) => (
//               <Robot id={r.id} email={r.email} name={r.name}></Robot>
//             ))}
//           </div>
//         </div>

//       </div>
//     );
//   }
// }


// 函数式hooks组件写法
const App: React.FC = (props) => {
  const [count, setCount] = useState(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<Boolean>(false)
  const [error, setError] = useState<string>()


  useEffect(() => {
    console.log('useEffect')
    document.title = `点击${count}次`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setRobotGallery(data)
      } catch(e:any) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
      <div className={styles.app}>
        {/* 标题 */}
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo"></img>
          <h1>标题要长</h1>
        </div>

        {/* 添加数量 */}
        <button onClick={() => {
          setCount(count + 1)
        }}>Click</button>
        <span>count: {count}</span>

       {/* 购物车 */}
        <ShoppingCart></ShoppingCart>

        {/* 列表 */}
        {error && <div>网站出错了： {error} </div>}
        {!loading ? (<div className={styles.robotList}>
            {robotGallery.map((r: any, index: number) => (
              index % 2 === 0 ?
                (<RobotDicount id={r.id} email={r.email} name={r.name}></RobotDicount>)
                 :
                (<Robot id={r.id} email={r.email} name={r.name}></Robot>)
            ))}
          </div>)
          : (<h2>loading 加载中</h2>)
        }
      </div>
    );
}

export default App;
