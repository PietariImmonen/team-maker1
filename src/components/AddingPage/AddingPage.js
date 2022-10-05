import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddingPage = ({create}) => {
    const [task1, setTask] = useState('')
    const [drink1, setDrink] = useState('')

    const changeTask = (e) => {
        setTask(e.target.value)
    }

    const changeDrink = (e) => {
        setDrink(e.target.value)
    }

    const submitValues = (e) => {
        e.preventDefault()
        const task = {
            task: task1,
            drink: drink1,
        }

        create(task)
        setDrink('')
        setTask('')
    }

    console.log(task1, drink1)

  return (
    <div style={{padding: '10rem', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <TextField id="outlined-basic" label="Task" variant="outlined" value={task1} onChange={changeTask}/>
        <TextField id="outlined-basic" label="Drink" variant="outlined" value={drink1} onChange={changeDrink}/>
        <Button variant="contained" onClick={submitValues}>Post</Button>

    </div>
  )
}

export default AddingPage