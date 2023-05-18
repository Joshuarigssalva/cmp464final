import { useState } from 'react'

const Form = ( {handleSubmit}) => {
  const [change, setchange] = useState({name:"", url:""})
  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    setchange((change) => ({ ...change, 
      [event.target.name]: event.target.value }))

  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
            //alert("clicked")
       handleSubmit(change)
       setchange({name:"", url:""})
  }

  return (
    <form id='change' onSubmit={onFormSubmit}>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}

      <div>

        <div>Name of Website</div>

        <input
          onChange={handleChange}
          type={'text'} name='name' style={{ width: '25%' }} />

      </div>

      <div>URL</div>

      <div>

        <input
          onChange={handleChange}
          type={'text'} name='url' style={{ width: '25%' }} />

      </div>

      <button type="submit"
        style={{
          backgroundColor: 'lightblue',
          color: 'black',
          fontSize: '12px',
          fontWeight: 'bold',
          padding: '5px',
          cursor: 'pointer',
          width: '70px',
          borderRadius: '5px',
          height: '35px'
        }}
      >Submit</button>

    </form>
  )
}

export default Form