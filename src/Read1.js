import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Read1 = () => {

  const [all, setAll] = useState()

  const GetallData = () => {
    axios
      .get('http://localhost:8000/')
      .then((res) => {
        setAll(res.data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  GetallData();

  return (
    <div>

      {all?.map((e, v) => {
        return (
          <div key={v}>
            <div key={e._id}>
              <img src={e.image} class="img-fluid" alt="..."></img>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Read1
