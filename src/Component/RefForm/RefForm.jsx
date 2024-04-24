import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect(() =>{
        nameRef.current.focus();
    },[])

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder="Enter your name" name='name' /><br />
            <input ref={emailRef} defaultValue={'zacki420@gmail.com'} type="email" placeholder="Enter email" name='email' /><br />
            <input ref={passwordRef} type="password" name="password" placeholder="Password" id="" /><br />
            <button>Submit</button>
        </form>
        </div>
    );
};

export default RefForm;