import './AddTask.css';

const AddTask = ({value, handleChange, handleSubmit}) => {
    return (
            <form onSubmit={handleSubmit} className="addTask">
                <input  
                className='addTask__input' 
                type="text"
                placeholder='add details'
                value={value} 
                onChange={handleChange}
                />
                <button type='submit' className='addTask__button'>Add</button>
            </form>
    );
}
 
export default AddTask;