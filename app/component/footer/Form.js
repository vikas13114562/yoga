import { Btn } from '../utils/Allbtn'
import './footer.css'

export default function Form() {
    return (
        <div className='form-container'>
            <div className='main-head'>
                Say Hello
            </div>
            <input className='input' name='name' required placeholder='Name' />
            <input className='input' name='email' required placeholder='Email' />
            <input className='input' name='phone' required placeholder='Phone' />
            <Btn name="Submit" />
            
        </div>
    )
}