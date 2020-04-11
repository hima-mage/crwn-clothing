import React from 'react' 
import SignIn from '../../component/sign-in/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'

import './sign.styles.scss'


const Sign =() => (
    <div className="sign-in-and-up">
       <SignIn />
       <SignUp />
    </div>
)
 
export default Sign 