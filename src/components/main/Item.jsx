import './Item.css';

import { ImBin } from 'react-icons/im';

const Item = ({task, id, isActive, handleCheckboxChange, handleChangeState, handleDeleteTask}) => {
    return  (
        <div className='task'>
        <li className='task__item'>
            {/* <input 
            type='checkbox'
            className="task__checkbox"
            checked={!isActive}
            onChange={()=>handleCheckboxChange(id)}
            onClick={handleChangeState}
            /> */}
               <div className="card">
        <div className="checkbox-container">
        <label className="checkbox-label">
            <input 
            checked={!isActive}
            onChange={()=>handleCheckboxChange(id)}
            onClick={handleChangeState}
            type="checkbox" />
            <span className="checkbox-custom rectangular"></span>
        </label>
    </div>
    </div>
            <p className='task__text' style={!isActive ? {textDecoration: 'line-through'}:null}>{task}</p>
        </li>
        <button 
        className='task__btn' 
        onClick={()=> handleDeleteTask(id)}>
            <ImBin />
         </button>
        </div>
    );
}
 
export default Item;