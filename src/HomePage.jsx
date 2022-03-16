import {React} from 'react'
import { QuestionList } from './QuestionList'
import { getUnansweredQuestions } from './QuestionData'
export const HomePage = ()=>(
    <div>
        <h4>Unanswered Question</h4>
        <button>Ash a Question</button>
        <QuestionList data = {getUnansweredQuestions()}/>
    </div>
)