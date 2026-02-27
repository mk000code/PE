
import Header from "./Components/Header"
import { UserCard } from "./Components/UserCard"
import { Wrapper } from "./Components/Wrapper"
function App() {
const users=[
    {
      name:"VK",
      role:"BatsMan",
      country:"India"
      
    },
    {
      name:"Ms.D",
      role:"BatsMan",
      country:"India"
    },
   { name:"Sourav Ganguly",

    role:"Bowler",
    country:"India"
   }

  ]
  return (
    <div>
   <h1>Users Dashboard</h1>
   <Wrapper title="Users List">
    {
     users.map((user, index) => (
  <UserCard key={index} user={user} />
))

    }
   </Wrapper>
   </div>
  )
}

export default App