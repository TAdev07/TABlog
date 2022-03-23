import React, {useRef} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ReactToPrint from 'react-to-print';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {AiOutlinePrinter} from 'react-icons/ai';

// components
import Information from '../../components/resume/Information';
import Education from '../../components/resume/Education';
import Skill from '../../components/resume/Skill';
import Experience from '../../components/resume/Experience';
import Project from '../../components/resume/Project';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    const componentRef = useRef(null);
    return (
        <Layout title={`Hello from ${siteConfig.title}`} description='Description will go into a meta tag in <head />'>
            <main className='mt-8'>
                <div className='max-w-7xl mx-auto px-8 flex justify-end mb-10'>
                    <ReactToPrint
                        content={() => componentRef.current}
                        trigger={() => {
                            return (
                                <button className='ml-8 bg-blue-400 border-none p-2 cursor-pointer rounded-md flex items-center text-white'>
                                    <AiOutlinePrinter className='mr-2' />
                                    Print to PDF!
                                </button>
                            );
                        }}
                    />
                </div>

                <div className='max-w-7xl mx-auto px-8' ref={componentRef}>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='mb-1'>Nguyễn Tuấn Anh/ Tuan Anh Nguyen</h2>
                            <span className='font-medium'>SENIOR FRONTEND DEVELOPER</span>
                        </div>
                        <div className='text-right'>
                            <h4 className='mb-1'>CV was last updated on</h4>
                            <h3>23 Mar 2022</h3>
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
    );
}
