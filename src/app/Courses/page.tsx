import React from 'react'
import CoreCourses from '../CoreCourses/page'
import AdvancedCourses from '../AdvanceC/page'

const Courses = () => {
  return (
    <div className='mt-20 ml-5 '>
      <div className='bg-slate-200 rounded-md w-auto h-auto pb-10 pt-5'>
         <CoreCourses />

<AdvancedCourses />
</div>
    </div>
  )
}

export default Courses