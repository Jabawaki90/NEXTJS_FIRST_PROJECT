import { useState } from "react";

const Header = ({title})=>{
    return <h1>{title ? title : 'Default title'}</h1>
}

const Homepage = ()=>{
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  const handleClick = ()=>{
    setLikes(likes+1)
  }

  return <div>
    <Header title="Develop. Preview. Ship. " />
    <ul>
        {names.map((e)=>{
            <li key={e}>{e}</li>
        })}
    </ul>
    <button onClick={handleClick}>Like ({likes})</button>
  </div>
}

export default Homepage;