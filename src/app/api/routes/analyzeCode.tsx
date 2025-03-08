export  default async function analyzeCode(req:string){
    if(req ===null){
        return
    }
    const headers =new Headers()
    headers.append("Content-Type","application/json")
    try{
        const response =await fetch(`http://localhost:8080/api/v1/ai/analyse?request=${req}`,{
            method:"POST",
            headers:headers
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode ===200){
                return data.analysis;
            }else{
                return null
            }
        }
    }catch (e) {
        throw new Error("error:"+e)
    }

}