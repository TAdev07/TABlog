import React from 'react';

import {GoPrimitiveDot} from 'react-icons/go';

import Title from './Title';
import styles from './index.module.css';

export default function Experience() {
    return (
        <>
            <Title>PERSONAL PROJECTS</Title>
            <h3 className='mt-2 text-lg mb-2'>1. Package components, charts</h3>
            <ul className='p-2' style={{listStyle: 'none'}}>
                <li className={`${styles['list-due']} pb-5`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h4 className='mb-2'>Link</h4>
                    <a href='https://sandbox-document.ants.vn/components#/document' target='_blank'>
                        sandbox-document.ants.vn
                    </a>
                </li>
                <li className={`${styles['list-due']} pb-5`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h4 className='mb-2'>Descriptions</h4>
                    <span>We provide plenty of UI components to enrich your web applications, and we will improve the component's experience.</span>
                </li>
                <li className={`${styles['list-due']}`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h4 className='mb-2'>Tech stack</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Redux</li>
                        <li>Typescript</li>
                        <li>Webpack</li>
                    </ul>
                </li>
                <li className={`${styles['list-due']}`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h4 className='mb-2'>Features</h4>
                    <ul>
                        <li>Charts</li>
                        <li>Component UI</li>
                        <li>Icons</li>
                    </ul>
                </li>
            </ul>
            <h3 className='mt-2 text-lg mb-2'>2. TA Blog</h3>
            <ul className='p-2' style={{listStyle: 'none'}}>
                <li className={`${styles['list-due']} pb-5`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h4 className='mb-2'>Link</h4>
                    <a href='https://ta-blog.vercel.app/resume' target='_blank'>
                        TA Blog
                    </a>
                </li>
                <li className={`${styles['list-due']} pb-5`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h4 className='mb-2'>Descriptions</h4>
                    <span>A knowledge-aggregating blog that is still in development.</span>
                </li>
                <li className={`${styles['list-due']}`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h4 className='mb-2'>Tech stack</h4>
                    <ul>
                        <li>Docusaurus</li>
                        <li>ReactJS</li>
                        <li>Tailwindcss</li>
                        <li>Markdown</li>
                    </ul>
                </li>
                <li className={`${styles['list-due']}`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h4 className='mb-2'>Features</h4>
                    <ul>
                        <li>Tutorial</li>
                        <li>Blog</li>
                        <li>Resume</li>
                    </ul>
                </li>
            </ul>
            <h3 className='mt-2 text-lg mb-2'>3. Other projects</h3>
            <ul className='p-2' style={{listStyle: 'none'}}>
                <li className={`${styles['list-due']}`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h4 className='mb-2'>Link</h4>
                    <a href='https://github.com/TAdev07' target='_blank'>
                        Github
                    </a>
                </li>
            </ul>
        </>
    );
}
