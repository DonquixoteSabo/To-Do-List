const Item = ({task, id, isActive}) => {
    return  (
        <li className='task__item'>
            <p className='task__text'>{task}</p>
            <input 
            type='checkbox'
            className="task__checkbox"
            // checked={isActive}
            />
        </li>
    );
}
 
export default Item;