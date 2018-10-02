import React from 'react';
import './Card.css';
import CardContent from './CardContent';

const people = [{
    name: 'Joe',
    identity: 'Strong and Big',
    age: 28,
    bestFriend: 'Jordan Stanfield'
  },
  {
    name:'Jordan',
    identity:'smart',
    age:28,
    bestFriend: 'Joe'
  }
  ]

const People = (props) => {
    return ( 
        <div>
            {people.map(person => {
                return (
                    <CardContent passing={person} />
                )
            })}
        </div>
     );
}
 
export default People;