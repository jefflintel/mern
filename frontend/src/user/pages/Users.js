import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [{
    id: 'u1',
    name: 'James Naysium',
    image: 'https://placekitten.com/300/300',
    places: 3
  },
  {
    id: 'u2',
    name: 'Randy Randallman',
    image: 'https://placekitten.com/100/100',
    places: 5
  },
  {
    id: 'u3',
    name: 'Lana Kane',
    image: 'https://placekitten.com/200/200',
    places: 1
  }
]

  return <UsersList items={USERS}/>
};

export default Users;
