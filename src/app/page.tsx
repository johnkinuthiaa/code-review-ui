"use client"
import CodeIcon from '@mui/icons-material/Code';
import Analysis from "@/components/ui/analysis";


export default function Home() {
  return (
      <div className={"w-[90%] m-[0 auto] flex flex-col items-center justify-center text-black bg-white"}>
        <h1 className={"font-extrabold text-4xl mt-10 mb-2 "}>Code Analysis system</h1>
        <p className={" text-xl m-2"}>Submit your code to analyze for bugs,security vulnerabilities,performance issues and best coding practices</p>
        <div className={"rounded-2xl border border-gray-300 flex flex-col w-8/12 p-5 "}>
          <div className={"flex flex-col leading-7"}>
            <h4 className={"font-bold text-2xl"}>Code Input</h4>
            <p className={"mt-3 mb-6"}>Paste your code Snippet below</p>
          </div>
          <textarea className={"outline active:outline-black font-mono rounded-3xl h-98 overflow-scroll w-[95%] scroll-smooth resize-none m-6 p-5 border border-gray-300"}
                    placeholder={"// paste your code here..."} />
          <button
              className={"p-3 text-blue-700 bg-black w-fit cursor-pointer font-bold rounded-2xl flex items-center"}><CodeIcon /> Analyze Code</button>
        </div>
          <Analysis/>
      </div>
  )
}
