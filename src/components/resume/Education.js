import React from 'react'

import { GoPrimitiveDot } from "react-icons/go";

import Title from './Title';
import styles from './index.module.css';

export default function Education() {
  return (
    <>
        <Title>Education</Title>
        <ul className="p-2"style={{listStyle: 'none'}}>
            <li className={styles['list-due']}>
                <GoPrimitiveDot className="text-[19px] absolute left-0 text-[#4e4e4e]" />
                <h5 className="text-sm font-normal italic text-gray-500 mb-1">Step 2015 – Step 2018</h5>
                <h4 className="mb-2">Cao Thang Technical College</h4>
                <span>Major: Electronics and Telecommunications</span>
            </li>
        </ul>
    </>
  )
}
