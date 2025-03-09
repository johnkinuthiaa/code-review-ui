"use client"
import CodeIcon from '@mui/icons-material/Code';
import Analysis from "@/components/ui/analysis";
import {useState} from "react";


export default function Home() {
    const[codeForAnalysis,setCodeForAnalysis] =useState<string>("");
    const[analyseCode,setAnalyseCode] =useState(false)
    const[message,setMessage]=useState<string>("")
  return (
      <div className={"w-[90%] m-[0 auto] flex flex-col items-center justify-center text-black bg-white"}>
        <h1 className={"font-extrabold text-4xl mt-10 mb-2 "}>Code Analysis system</h1>
        <p className={" m-4"}>Submit your code to analyze for bugs,security vulnerabilities,performance issues and best coding practices</p>
        <div className={"rounded-2xl border border-gray-300 flex flex-col w-8/12 p-5 "}>
          <div className={"flex flex-col leading-7"}>
            <h4 className={"font-bold text-2xl"}>Code Input</h4>
            <p className={"mt-3 mb-6"}>Paste your code Snippet below</p>
          </div>
            {message&&<p className={"text-red-500 animate-bounce p-1 "}>{message}</p>}
          <textarea spellCheck={false} className={"outline active:outline-black font-mono rounded-3xl h-98 overflow-scroll w-[95%] scroll-smooth resize-none m-6 p-5 border border-gray-300"}
                    placeholder={"// paste your code here..."} onChange={(e)=>{
                        setCodeForAnalysis(e.target.value)
          }}/>
          <button
              className={` ${analyseCode&&"cursor-not-allowed"} p-3 text-white bg-black w-fit cursor-pointer font-bold rounded-2xl flex items-center`}
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
