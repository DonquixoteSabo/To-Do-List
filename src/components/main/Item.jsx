const Item = ({task, id, isActive, handleCheckboxChange, handleChangeState}) => {
    return  (
        <li className='task__item'>
            <p className='task__text'>{task}</p>
            <input 
            type='checkbox'
            className="task__checkbox"
            checked={!isActive}
            onChange={()=>handleCheckboxChange(id)}
            onClick={handleChangeState}
            />
        </li>
    );
}
 
export default Item;