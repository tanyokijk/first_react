import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Group({ name, members, albums }) {
  return (
    <div>
      <h2>Group: {name}</h2>
      <div>
  <h4>Members:</h4>
  <ul>
    {members.map((member, index) => (
      <li key={index}>
       {member.name} - {member.role}
      </li>
    ))}
  </ul>
</div>
      <h4>Albums: </h4>
      <ul>
    {albums.map((album, index) => (
      <li key={index}>
      <img src={album.img} alt={album.name} />
      {album.name}
      </li>
    ))}
  </ul>
    </div>
  );
}
export default Group
