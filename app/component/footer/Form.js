import { Btn } from '../utils/Allbtn'
import './footer.css'

export default function Form() {
    return (
        <div className='form-container'>
            <div className='main-head'>
                Say Hello
            </div>
            <input name='name' required placeholder='Name' />
            <input name='email' required placeholder='Email' />
            <input name='phone' required placeholder='Phone' />
            <Btn name="Submit" />
            
        </div>
    )
}