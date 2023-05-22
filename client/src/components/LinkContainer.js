import { useEffect, useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const [array, setArray] = useState([]);

  //class code and notes example
  const fetchLinks = async () => {
    try {
      let response = await fetch('/namelinks')
      console.log(response)
      let data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const postLink = async (data) => {
    let testLink = {
      animename: "Test 5/1/23",
      animeurl: "test.com"
    }

    try {
      let response = await fetch('/myfavlinks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)       
      })
      console.log(response)
      //add wait
      let message = response.text()
      console.log(message)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    // fetchLinks()
    //postLink()
    const getLinks = async () => {
      const data = await fetch('/myfavlinks')
      const json = await data.json()
      setArray(json)
    }
    getLinks()
    .catch(console.err)

  }, [array])

  //end of class code and notes example
  
  const handleRemove = async (id) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
      await fetch(`/myfavlinks/${id}`, {method: 'DELETE'})
       
  }

  const handleSubmit = async (linkobject) => {
    
    setArray([...array, linkobject])
    //alert("clicked")
    console.log(linkobject)
    await fetch(`/myfavlinks`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        animename:linkobject.animename,
        animeurl:linkobject.animeurl
      })       
    })
  }

  return (
    <div className="container" style={{display:'block'}}>
      <h1>My Favorite Anime and links I watch anime</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */
      <Table removeLink = {handleRemove} linkData = {array}/>
      }

      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default LinkContainer
