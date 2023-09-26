import Link from 'next/link'
import React from 'react'

const data = [{name:"Sai",email:'sai@123.com',id:3}]
function Users() {
  return (
<>
{data.map(user=><div> <Link href={`/users/${user.id}`}>{user.name}</Link>  </div>)}

{/* {data.map(use=><Link href={`/users/${use.id}`}>{use.name}</Link>)} */}
</>
  )
}

export default Users;