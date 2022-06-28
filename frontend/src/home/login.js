import React from 'react';
import './stylesheets/style.css'
import { BsFillEnvelopeFill, BsFillLockFill } from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
export class Login extends React.Component {
    render() {
        return(
           <div style={{'width': '100%', 'margin': '0 auto'}}>
               <div className={'container-100'} style={{'background': 'linear-gradient(-135deg,#00bcd4,#4158d0)'}}>
                    <div className={'model-wrap'} style={{'width': '960px'}}>
                        <div style={{'width': '316px', 'willChange': 'transform', 'transform': 'perspective(300px) rotateX(0deg) rotateY(0deg)'}}>
                            <img src={'https://colorlib.com/etc/lf/Login_v1/images/img-01.png'}/>
                        </div>
                        <form style={{'width': '290px'}}>
                            <span className={'form-title'}>Login</span>
                            <div className='input-wrap'>
                                    <input className='input-100' type='text' name='email' placeholder='Email'/>
                                    <span className={'symbol-input'}>
                                        <BsFillEnvelopeFill></BsFillEnvelopeFill>
                                    </span>
                            </div>
                            <div className={'input-wrap'}>
                                    <input className={'input-100'} type='password' name='password' placeholder='Password'/>
                                <span className={'symbol-input'}>
                                        <BsFillLockFill></BsFillLockFill>
                                    </span>
                            </div>
                            <div className={'input-btn'}>
                                   <button className={'form-btn'}>Login</button>
                            </div>
                            <div className="p-t-12" style={{'textAlign': 'center'}}>
                                <span className={'txt1'} style={{'marginRight': '4px'}}>Forget</span>
                                <a className={'txt2'}>Username/ Password?</a>
                            </div>
                            <div style={{alignItems: 'center', paddingTop: '30px', display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}>
                                <span className={'txt2'}> Or Sign Up Using</span>
                                <FcGoogle className={'icon-button'}></FcGoogle>
                            </div>
                            <div className={'p-t-136'} style={{'textAlign': 'center'}}>
                                <a className={'txt2'}>Create Your Account</a>
                            </div>
                        </form>
                    </div>
               </div>
           </div>
        )
    }
}
