import {React} from 'react'
import { Question } from './Question'
export const QuestionList =(props)=>(
    <ul>
        {
            props.data.map((question)=>(
                // 为什么li元素必须设置key属性？
                // 为了让React框架可以比较状态改变前后这个元素是否发生了改变
                // 所有通过循环产生的元素 都必须要有一个唯一值，作为其Key属性
                <li key={question.questionId}>
                    <Question data = {question} />
                    <hr/>
                </li>                
            ))
        }
    </ul>
)