
import StudentTable from '@/public/component/StudentTable';
import Link from 'next/link';
import React from 'react'

const StadTableScren = () => {
  
  return (
    <div>
<StudentTable/>
<Link href={'/stdform'}>StdForm</Link>
    </div>
  )
}

export default StadTableScren;