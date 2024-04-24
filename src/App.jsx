import './App.css'
import FormMaster from './Component/FormMaster/FormMaster'
// import ReusableForm from './Component/ReusableForm/ReusableForm'
// import RefForm from './Component/RefForm/RefForm'
// import StateFulForm from './Component/StateFulForm/StateFulForm'
// import SingleForm from './Component/SingleForm/SingleForm'

function App() {

  //  const handleSignUpSubmit = data =>{
  //   console.log('Sign Up',data)
  //  }
  //  const handleProfileSubmit = data =>{
  //   console.log('Profile Update',data)
  //  }

  return (
    <>
      <h1>State Management</h1>
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>Please sign up right now.</div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtn='Update' handleSubmit={handleProfileSubmit}>
        <div>Always update your profile.</div>
      </ReusableForm> */}
      {/* <RefForm></RefForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <SingleForm></SingleForm> */}
      <FormMaster></FormMaster>
    </>
  )
}

export default App
