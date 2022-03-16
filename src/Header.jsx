import { React } from "react";
export const Header = () => {
    // currentTarget: 当前触发这个事件的dom元素
    // value: dom元素的value值
    const onInputChanged = (e) => console.log(e.currentTarget.value);
    // e是触发button的click事件的时候，浏览器默认传递的事件参数
    const onButtonClick = (e) => alert('Header::button::clicked')
    return (
        <div>
            <a href='./'>X呼</a>
            <input type='text'
                placeholder="search question"
                onChange={onInputChanged}></input>
            <button onClick={onButtonClick}>Search</button>            
        </div>
    )
}