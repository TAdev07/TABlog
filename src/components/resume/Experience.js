import React from 'react';

import {GoPrimitiveDot} from 'react-icons/go';

import Title from './Title';
import styles from './index.module.css';

export default function Experience() {
    return (
        <>
            <Title>Experience</Title>
            <ul className='p-2' style={{listStyle: 'none'}}>
                <li className={`${styles['list-due']} pb-5`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h5 className='text-sm font-normal italic text-gray-500 mb-1'>May 2021 – Now</h5>
                    <h4 className='mb-2'>Houze Group</h4>
                    <ul>
                        <li>
                            Software Engineer at the company, create and develop website, mobile application.
                        </li>
                        <li>
                            Developed an investing website application is <strong><a href="http://houzeinvest.vn/" target="_blank">Houze Invest</a></strong> using <strong>NextJS</strong>.
                        </li>
                        <li>
                            Developed apartment management mobile application is <strong>Houze Building</strong> using <strong>Flutter</strong>.
                        </li>
                    </ul>
                </li>
                <li className={`${styles['list-due']} pb-5`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h5 className='text-sm font-normal italic text-gray-500 mb-1'>Feb 2019 – Apr 2021</h5>
                    <h4 className='mb-2'>Ants Programmatic</h4>
                    <ul>
                        <li>
                            Developed <strong>A1 Analytics</strong> (a1digihub.com - a product like Google Data Studio), ANTS Forms (a product like Google Forms) using <strong>ReactJS, HTML, CSS, …</strong>{' '}
                        </li>
                        <li>
                            Developed a tool advertising, allow client <strong>create ads, coupon, banner, …</strong> Also, review ads, targeting audience, area.
                        </li>
                        <li>
                            Created <strong>Geomap</strong> chart for <strong>A1 Analytics</strong> project using <strong>ReactJS, GeoJSON and d3-geo</strong>.
                        </li>
                        <li>
                            Created <strong>Treemap</strong> chart for <strong>A1 Analytics</strong> project using <strong>ReactJS and squarified treemap algorithm</strong>.
                        </li>
                        <li>
                            Created <strong>Pivot chart</strong> for <strong>A1 Analytics</strong> project using <strong>ReactJS, react-virtualized and Web Worker</strong>.
                        </li>
                        <li>Optimized render component for ReactJS project using React memo, reselect, react-loadable.</li>
                        <li>
                            Made a package component, chart, monitor alert on npmjs.com with under name <strong>antscorp</strong>. Exp: <strong>@antscorp/components, @antscorp/chart, @antscorp/icon, …</strong>
                        </li>
                        <li>
                            Designed <strong>web API</strong> with add, delete, modified functionality using NodeJS, Express and Elasticsearch.
                        </li>
                    </ul>
                </li>
                <li className={`${styles['list-due']}`}>
                    <GoPrimitiveDot className='text-[19px] absolute left-0 text-[#4e4e4e]' />
                    <h5 className='text-sm font-normal italic text-gray-500 mb-1'>Dec 2017 – Sep 2018</h5>
                    <h4 className='mb-2'>Mekong Resource</h4>
                    <ul>
                        <li>Internship at the company, starting to interact with the Frontend.</li>
                        <li>Research, self-learning HTML, CSS, JavaScript</li>
                        <li>Contact to Design team to get information about web interface through file Zeplin.</li>
                        <li>Explain and assign work to groups of interns in the same course.</li>
                        <li>Handling animations increase the liveliness of the website for users using Animate.css.</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}
