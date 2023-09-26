import StudentForm from '@/public/component/StudentForm';
import Link from 'next/link';
import React from 'react'

const StdForm = () => {
  return (
    <div>
<StudentForm/><br/>
<Link href={'/stdtable'}>StdTable</Link>
    </div>
  )
}

export default StdForm;