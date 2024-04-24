import { useState } from "react";

const StateFulForm = () => {

    const [email, setEmail] = useState('akash@gmail.com');
    const [password,setPassword] = useState(null);
    const [error,setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 8){
            setError('password must be 6 character or longer.');
        }
        else{
            setError('');
            console.log(email,password)
        }
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input  type="text" placeholder="Enter your name" name='name' /><br />
            <input value={email} onChange={handleEmailChange} type="email" placeholder="Enter email" name='email' /><br />
            <input onChange={handlePasswordChange} type="password" name="password" placeholder="password" id="" required/><br />
            <button>Submit</button>
            {
                error && <p>{error}</p>
            }
        </form>
        </div>
    );
};

export default StateFulForm;