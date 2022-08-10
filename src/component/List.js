import React from 'react'

const List = (props) => {
    const peoples = props.peoples
    // console.log(peoples)
  return (
    <>
        {peoples.map((people) => (
            <article key={people.id} className='person'>
            <img src={people.image} alt={people.name} />
            <div>
              <h4>{people.name}</h4>
              <p>{people.age} years</p>
            </div>
          </article>
        ))}
    </>
  )
}

export default List