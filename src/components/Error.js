import { useRouteError } from "react-router-dom"
const Error=()=>{
    const err=useRouteError()
    console.log("err",err)
return(
    <div className="error">
        <h1>Oops!!</h1>
        <h2>{err.status}:{err.statusText}</h2>
    </div>
)
}
export default Error


//response
// {
//     "status": 404,
//     "statusText": "Not Found",
//     "internal": true,
//     "data": "Error: No route matches URL \"/hgvsdh\"",
//     "error": {}
// }