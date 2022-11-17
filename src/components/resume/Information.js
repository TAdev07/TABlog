import React from 'react'

import Title from './Title'
import {FaRegUser, FaBirthdayCake} from 'react-icons/fa'
import {BsGenderAmbiguous, BsTelephone} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {GrLocation} from 'react-icons/gr'

export default function Information() {
  return (
    <>
      <Title>Information</Title>
      <table className='table-auto mt-4'>
        <tbody>
          <tr className='border-t-0 bg-transparent'>
            <td className='p-0 border-l-0 border-r-0 border-t-0 my-2'>
              <div className='border-r border-0 border-solid border-gray-400 my-2 pr-3 w-full flex justify-center'>
                <FaRegUser />
              </div>
            </td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0 font-medium'>Name:</td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0'>Nguyễn Tuấn Anh</td>
          </tr>
          <tr className='border-t-0 bg-transparent'>
            <td className='p-0 border-l-0 border-r-0 border-t-0 my-2'>
              <div className='border-r border-0 border-solid border-gray-400 my-2 pr-3 w-full flex justify-center'>
                <BsGenderAmbiguous />
              </div>
            </td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0 font-medium'>Gender:</td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0'>Male</td>
          </tr>
          <tr className='border-t-0 bg-transparent'>
            <td className='p-0 border-l-0 border-r-0 border-t-0 my-2'>
              <div className='border-r border-0 border-solid border-gray-400 my-2 pr-3 w-full flex justify-center'>
                <FaBirthdayCake />
              </div>
            </td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0 font-medium'>DOB:</td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0'>14/7/1996</td>
          </tr>
          <tr className='border-t-0 bg-transparent'>
            <td className='p-0 border-l-0 border-r-0 border-t-0 my-2'>
              <div className='border-r border-0 border-solid border-gray-400 my-2 pr-3 w-full flex justify-center'>
                <FiMail />
              </div>
            </td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0 font-medium'>Mail:</td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0'>tuananh183461@gmail.com</td>
          </tr>
          <tr className='border-t-0 bg-transparent'>
            <td className='p-0 border-l-0 border-r-0 border-t-0 my-2'>
              <div className='border-r border-0 border-solid border-gray-400 my-2 pr-3 w-full flex justify-center'>
                <BsTelephone />
              </div>
            </td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0 font-medium'>Phone/Zalo:</td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0'>0981 770 469</td>
          </tr>
          <tr className='border-t-0 bg-transparent'>
            <td className='p-0 border-l-0 border-r-0 border-t-0 my-2'>
              <div className='border-r border-0 border-solid border-gray-400 my-2 pr-3 w-full flex justify-center'>
                <GrLocation />
              </div>
            </td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0 font-medium'>Location:</td>
            <td className='px-2 py-1 border-r-0 border-l-0 border-t-0'>HCMC</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
