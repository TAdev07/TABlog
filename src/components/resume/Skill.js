import React from 'react'

import { BiCodeAlt } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiStrapi, SiMaterialui, SiVite, SiWebpack, SiFlutter, SiStyledcomponents, SiTailwindcss } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import Title from './Title';
import TagSkill from './TagSkill';
import styles from './index.module.css';

export default function Education() {
  return (
    <>
        <Title>Skill</Title>
        <h4 className="text-2xl flex items-center mt-4 mb-1"><BiCodeAlt className="text-2xl mr-2" />Technical</h4>
        <div className="ml-4">
            <h5 className="text-xl mb-1">Main skill</h5>
            <ul className="pl-4">
                <li className="flex items-end mb-2">
                    <div className="border-solid border-0 border-b border-gray-400 text-gray-500 w-36">4 Year</div>
                    <div className="flex">
                        <TagSkill icon={<AiFillHtml5/>} name="HTML5" />
                        <TagSkill icon={<DiCss3/>} name="CSS3" />
                        <TagSkill icon={<IoLogoJavascript/>} name="JAVASCRIPT" />
                    </div>
                </li>
                <li className="flex items-end">
                    <div className="border-solid border-0 border-b border-gray-400 text-gray-500 w-36">3 Year</div>
                    <div className="flex">
                        <TagSkill icon={<FaReact/>} name="REACT" />
                    </div>
                </li>
            </ul >
            <h5 className="text-xl mb-1">Sub skill</h5>
            <ul className="pl-4">
                <li className="flex items-end mb-2">
                    <div className="border-solid border-0 border-b border-gray-400 text-gray-500 w-36">
                        Server side, API
                    </div>
                    <div className="flex">
                        <TagSkill icon={<FaNodeJs/>} name="NodeJS" />
                        <TagSkill icon={<SiNextdotjs/>} name="NextJS" />
                        <TagSkill icon={<SiStrapi/>} name="Strapi" />
                    </div>
                </li>
                <li className="flex items-end mb-2">
                    <div className="border-solid border-0 border-b border-gray-400 text-gray-500 w-36">
                        CSS Framework
                    </div>
                    <div className="flex flex-wrap">
                        {/* <TagSkill icon={<BsFillBootstrapFill/>} name="Bootstrap" /> */}
                        <TagSkill icon={<SiMaterialui/>} name="Material-UI" />
                        <TagSkill icon={<SiTailwindcss/>} name="Tailwindcss" />
                        <TagSkill icon={<BiDotsHorizontalRounded/>} name="" />
                    </div>
                </li>
                <li className="flex items-end mb-2">
                    <div className="border-solid border-0 border-b border-gray-400 text-gray-500 w-36">
                        Build Tools
                    </div>
                    <div className="flex">
                        <TagSkill icon={<SiVite/>} name="Vite" />
                        <TagSkill icon={<SiWebpack/>} name="Webpack" />
                    </div>
                </li>
                <li className="flex items-end mb-2">
                    <div className="border-solid border-0 border-b border-gray-400 text-gray-500 w-36">
                        Mobile
                    </div>
                    <div className="flex">
                        <TagSkill icon={<SiFlutter/>} name="Flutter" />
                    </div>
                </li>
                <li className="flex items-end mb-2">
                    <div className="border-solid border-0 border-b border-gray-400 text-gray-500 w-36">
                        CSS in JavaScript
                    </div>
                    <div className="flex">
                        <TagSkill icon={<SiStyledcomponents/>} name="Styled Components" />
                        <TagSkill name="CSS Modules" />
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}
