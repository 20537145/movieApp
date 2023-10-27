import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function FIlter({setSearch}) {
  return (
    <div style={{width:'320px'}}>
         <InputGroup className="mb-3">
            
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=>setSearch(e.target.value)}
        />
      </InputGroup>
      
    </div>
  )
}

export default FIlter