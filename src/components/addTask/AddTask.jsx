import './AddTask.css';

const AddTask = ({value, handleChange}) => {
    return (
        <section className="addTask">
            <input  
            className='addTask__input' 
            type="text"
            placeholder='add details'
            value={value}
            onChange={handleChange}
            />
            <button className='addTask__button'>Add</button>
        </section>
    );
}
 
export default AddTask;