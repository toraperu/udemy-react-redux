import React from 'react';



const App = () => {
  const profiles = [
    {name: "Tora", age: 22},
    {name: "Aya", age: 26},
    {name: "Noname"}
  ]
 return(
  <div>
   {
     profiles.map((profile, index) => {
       return <User name={profile.name} age={profile.age} key={index} />
     })
   }
  </div>
 )
}

const User = (props) => {
 return <div>I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
