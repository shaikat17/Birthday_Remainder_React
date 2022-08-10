import React from 'react'
import List from './List'

const BirthdaySection = (props) => {
    const data = props.data
    // console.log(data)
  return (
    <section className='container'>
        <h3>{data.length} birthdays today</h3>
        <List peoples={data} />
        {/* <button onClick={() => setPeople([])}>clear all</button> */}
    </section>
  )
}

export default BirthdaySection