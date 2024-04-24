import PropTypes from 'prop-types'

const ReusableForm = ({formTitle,submitBtn,handleSubmit,children}) => {
    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password : e.target.password.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            
            <h2>{formTitle}</h2>
            {children}
            <form onSubmit={handleLocalSubmit}>
            <input type="text" placeholder="Enter your name" name='name' /><br />
            <input type="email" placeholder="Enter email" name='email' /><br />
            <input type="password" name="password" placeholder="Password" id="" /><br />
            <input type="submit" value={submitBtn} /><br />
        </form>
        </div>
    );
};
ReusableForm.propTypes = {
    formTitle:PropTypes.object,
    submitBtn:PropTypes.object,
    handleSubmit:PropTypes.object,
    children:PropTypes.object
}
export default ReusableForm;