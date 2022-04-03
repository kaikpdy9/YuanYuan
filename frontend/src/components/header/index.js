import React, {useContext, useEffect, useRef, useState} from "react";
import {MouseContext} from "../../context/mouseContext";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Logo from "../Logo";
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)

const Header=()=>{


    const {cursorType,setCursorType}=useContext(MouseContext);
    const isLogin=localStorage.getItem('isLogin')
    const headerRef=useRef();

    const lastScrollTop=window.pageYOffset || document.documentElement.scrollTop;

    useEffect(()=>{

        if(typeof window!=="undefined"){
            window.addEventListener("scroll",()=>{
                const st = window.pageYOffset || document.documentElement.scrollTop;
                if (st> lastScrollTop){
                    gsap.to([headerRef.current],{
                        opacity:0, display:"none",duration:0.5
                    })
                } else {
                 gsap.to([headerRef.current],{
                     opacity:1,display:"grid"
                 })
                }
            })
        }

    })

    return(
        <div>
            <div className="header-style Ceviche grid-cols-12 grid" ref={headerRef} style={{borderBottom:'5px solid #020202',borderImage: 'linear-gradient(to left, #3F3F41, #EFEFEF) 1'}}>
                <div className="col-span-12 md:col-span-2 flex justify-center items-center W-40"><Logo width={150} height={108}/></div>
                <div className="md:col-span-3"></div>
                <div className="col-span-12 md:col-span-1 flex justify-center items-center"><Link to={'/'}><h5 onMouseEnter={()=>setCursorType("hovered")}
                                                                                                               onMouseLeave={()=>setCursorType("")}>Homepage</h5></Link></div>
                <div className="md:col-span-1"></div>
                <div className="col-span-12 md:col-span-1 flex justify-center items-center"><Link to={'/reviews'}><h5 onMouseEnter={()=>setCursorType("hovered")}
                                                                                                                      onMouseLeave={()=>setCursorType("")}>Notes</h5></Link></div>
                <div className="md:col-span-1"></div>
                {isLogin?<div className="md:col-span-3">已经登录啦</div>: <div className="col-span-12 md:col-span-3 flex justify-center items-center">
                    <div className="px-4">
                        <Link to="/sign-in">
                            <h5 onMouseEnter={()=>setCursorType("hovered")}
                                onMouseLeave={()=>setCursorType("")}>Sign in</h5>
                        </Link>
                    </div>
                    <div>
                        <Link to="/sign-up">
                        <span className="bg-dark-one text-dark-five text-center py-2 px-4 text-xl" onMouseEnter={()=>setCursorType("hovered")}
                              onMouseLeave={()=>setCursorType("")}>
                            Sign Up
                        </span>
                        </Link>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Header