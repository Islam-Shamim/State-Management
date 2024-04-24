import './SingleForm.css'
const SingleForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" name='name' /><br />
            <input type="email" placeholder="Enter email" name='email' /><br />
            <button>Submit</button>
        </form>
    );
};

export default SingleForm;