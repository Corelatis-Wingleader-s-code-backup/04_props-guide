import './App.css';
import { Header } from './Header';
import {HomePage} from './HomePage'

function App() {
  return (
    <div className="App">
      {/**
      * 为JSX元素中的属性赋值时，使用{}
      */}
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
/**
 * 1.怎样根据给定的数据，决定 组件的UI
 * 1.1 组件App与Header之间的关系是什么？
 * Header是构成App组件的一个子组件
 * 
 * 使用组件的props参数 从外界接收数据 
 * 1）如何将数据以参数的形式从父组件，或者从外部 直接传递给组件？
 * 类似于给HTML元素设置属性值的方式去传递
 * 区别： HTML元素属性赋值的时候 使用 attributeName = 'val' 的形式
 *       React组件在接收参数的时候，使用 parameterName = {val}的形式
 */
