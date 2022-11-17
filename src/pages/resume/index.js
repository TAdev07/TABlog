import React, {useRef, useEffect} from 'react'
import Layout from '@theme/Layout'
import {useReactToPrint} from 'react-to-print'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import {AiOutlinePrinter} from 'react-icons/ai'

// components
import Information from '../../components/resume/Information'
import Education from '../../components/resume/Education'
import Skill from '../../components/resume/Skill'
import Experience from '../../components/resume/Experience'
import Project from '../../components/resume/Project'

export default function Home() {
  const {siteConfig} = useDocusaurusContext()
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => {
      return componentRef.current
    },
    pageStyle: `
    * {
      box-sizing: border-box;
      -moz-box-sizing: border-box;
    }

    @media print{
      @page {
        margin: auto;
        margin-bottom: 40px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }`,
  })

  useEffect(() => {
    if (componentRef.current) {
      console.log('componentRef.current: ', componentRef.current)
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [componentRef.current])

  const handleKeyDown = (e) => {
    try {
      const mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
      console.log('mac: ', mac)

      if (mac && e.metaKey && (e.key == 'p' || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80)) {
        handlePrint()
        e.cancelBubble = true
        e.preventDefault()
        e.stopImmediatePropagation()
      } else if (!mac && e.ctrlKey && (e.key == 'p' || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80)) {
        handlePrint()
        e.cancelBubble = true
        e.preventDefault()
        e.stopImmediatePropagation()
      }
    } catch (error) {
      //
    }
  }

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description='Description will go into a meta tag in <head />'>
      <main className='mt-8'>
        <div className='max-w-7xl mx-auto px-8 flex justify-end mb-10'>
          <button
            onClick={handlePrint}
            className='ml-8 bg-blue-400 border-none p-2 cursor-pointer rounded-md flex items-center text-white'
          >
            <AiOutlinePrinter className='mr-2' />
            Print to PDF!
          </button>
        </div>

        <div className='max-w-7xl mx-auto px-8' ref={componentRef}>
          <div className='flex justify-between'>
            <div>
              <h2 className='mb-1'>Nguyễn Tuấn Anh/ Tuan Anh Nguyen</h2>
              <span className='font-medium'>SENIOR FRONTEND DEVELOPER</span>
            </div>
            <div className='text-right'>
              <h4 className='mb-1'>CV was last updated on</h4>
              {/* <h3>23 Mar 2022</h3> */}
              <h3>17 Nov 2022</h3>
            </div>
          </div>
          <hr />
          <div className='flex'>
            <div className='mr-4'>
              <Information />
              <div className='mt-8'>
                <Education />
              </div>
            </div>
            <div>
              <Skill />
            </div>
          </div>
          <Experience />
          <Project />
        </div>
      </main>
    </Layout>
  )
}
