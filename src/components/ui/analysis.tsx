import React, {useEffect, useState} from "react";

interface AnalysisProps {
    code?: string
}



const Analysis = ({code}: AnalysisProps) => {
    const[message,setMessage]=useState<string>("")
    const[analysisResponse,setAnalysisResponse] =useState<string>()
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData =async ()=>{
        const myHeaders =new Headers()
        myHeaders.append("Content-Type","application/json")
        try{
            const response=await fetch(`http://localhost:8080/api/v1/ai/analyse`,{
                method:"POST",
                headers:myHeaders,
                body:JSON.stringify({
                    "message": code
                })
            })
            if(response.ok){
                const data =await response.json()
                if(data.statusCode !=200){
                    setMessage(data.message)
                }else{
                    setAnalysisResponse(data.response)
                }

            }else{
                setMessage("server response Error")
            }

        }catch (error) {
            setMessage(""+error)
        }
    }
    return (
        <div className={"flex flex-col mt-4 leading-7 items-center w-8/12 leading-8"}>
            <h2 className={"font-bold text-2xl text-black"}>Codey&#39;s analysis Details</h2>
            <p>This is the result of the analysis</p>
            {message&&<p className={"font-bold text-red-500 "}>{message}</p>}
            <div className={"p-4 flex flex-col"}>
                <p>{analysisResponse?.replace(/\\n/g, '\n')
                    .replace(/\\u003c/g, '<')
                    .replace(/\\u003e/g, '>')}</p>
            </div>
        </div>
    )
}
export default Analysis