import { UserCard } from "./UserCard"
import { Wrapper } from "./Wrapper"
export function App() {
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

