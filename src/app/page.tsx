"use client"
import CodeIcon from '@mui/icons-material/Code';
import Analysis from "@/components/ui/analysis";
import {useState} from "react";
import { Switch } from "@/components/ui/switch"
import {DarkMode, LightMode} from "@mui/icons-material";

export default function Home() {
    const[codeForAnalysis,setCodeForAnalysis] =useState<string>("");
    const[analyseCode,setAnalyseCode] =useState(false)
    const[message,setMessage]=useState<string>("")
    const[theme,setTheme]=useState("light")

    const switchTheme =()=>{
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

  return (
      <div className={`w-[100%] overflow-scroll scroll-smooth m-[0 auto] flex flex-col items-center justify-center ${theme==="light"?"bg-white text-black":"bg-black text-white"}`}>
        <h1 className={"font-extrabold text-4xl lg:mt-10 sm:mt-4 md:mt-4 mb-2 "}>Code Analysis system</h1>
          <div className={"flex align-center justify-center gap-2 content-center"}>
              <button className={`outline-0 rounded-full border-0 border-gray-300 p-1 w-15 flex justify-start items-start cursor-pointer ${theme==="dark"?"pl-8 transform-p bg-white text-black":"text-white bg-black border-0"}`} onClick={(e)=>{
                  e.preventDefault()
                  switchTheme()
              }}>
                  {theme==="light"?<LightMode/>:<DarkMode/>}
              </button>
          </div>
        <p className={" m-4"}>Submit your code to analyze for bugs,security vulnerabilities,performance issues and best coding practices</p>
        <div className={"main__container rounded-2xl border-1 border-gray-300 flex flex-col lg:w-8/12 p-5 p-5 "}>
          <div className={"flex flex-col leading-7"}>
            <h4 className={"font-bold text-2xl"}>Code Input</h4>
            <p className={"mt-3 mb-6"}>Paste your code Snippet below</p>
          </div>
            {message&&<p className={"text-red-500 animate-bounce p-1 "}>{message}</p>}
          <textarea spellCheck={false} className={"text-area outline active:outline-black font-mono rounded-3xl h-98 overflow-scroll sm:w-full lg:w-[95%] scroll-smooth resize-none m-6 p-5 border-0 border-gray-300"}
                    placeholder={"// paste your code here..."} onChange={(e)=>{
                        setCodeForAnalysis(e.target.value)
          }}/>
          <button
              className={` ${analyseCode&&"cursor-not-allowed"} ${theme==="dark"?"bg-white text-black":"bg-black text-white"} p-3 w-fit cursor-pointer font-bold rounded-2xl flex items-center`}
              onClick={(e)=>{
                  e.preventDefault()
                  if(codeForAnalysis.length>10) {
                      setAnalyseCode(true)
                  }else {
                      setMessage("please input code")
                      setTimeout(()=>{setMessage("")},3000)
                  }
              }}
          >
              <CodeIcon />
              Analyze Code
          </button>
        </div>
          {analyseCode &&<Analysis code={codeForAnalysis}/>}
      </div>
  )
}
