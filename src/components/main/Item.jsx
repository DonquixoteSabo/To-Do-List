const Item = ({task, id, isActive, handleCheckboxChange}) => {
    return  (
        <li className='task__item'>
            <p className='task__text'>{task}</p>
            <input 
            type='checkbox'
            className="task__checkbox"
            checked={!isActive}
            onChange={()=>handleCheckboxChange(id)}
            />
        </li>
    );
}
 
export default Item;