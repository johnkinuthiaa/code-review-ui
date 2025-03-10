import React, {useEffect, useState} from "react";
import Swal from 'sweetalert2'


interface AnalysisProps {
    code?: string
}
type swalProps ={
    title: string;
    icon: string;
    text: string;
    timer: string;

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
                Swal.fire<swalProps>({
                    title: "Server response error",
                    icon: "error",
                    text: "error fetching data"
                }).then(r  =>r.dismiss)
                setMessage("server response Error")
            }

        }catch (error) {
            Swal.fire({
                title: "Error fetching data",
                icon: "error",
                text: "error fetching data"
            }).then(r  =>r.dismiss)
            setMessage(""+error)
        }
    }
    function formatApiResponse(apiResponse: string | undefined) {
        if (!apiResponse) {
            return "Invalid API response.";
        }
        const regex = /\*\*(.*?)\*\*/g; // Matches anything between ** and **
        return apiResponse.replace(regex, "/n");

    }

    return (
        <div className={"response__container flex flex-col mt-4 leading-7 items-center w-8/12 leading-8"}>
            <h2 className={"font-bold text-2xl text-black"}>Codey&#39;s analysis Details</h2>
            <p>This is the result of the analysis</p>
            {message&&<p className={"font-bold text-red-500 "}>{message}</p>}
            <div className={"p-4 flex flex-col"}>
                <div className={"[&>*]:leading-7"}>{formatApiResponse(analysisResponse)}</div>
            </div>
        </div>
    )
}
export default Analysis