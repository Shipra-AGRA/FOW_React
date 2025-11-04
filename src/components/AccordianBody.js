const AccordianBody=({data})=>{
    const {locality,areaName,costForTwo}=data.info
return(
    <div>
        <span>{areaName+", "+locality}</span>
        <br/>
        <span>{costForTwo}</span>
    </div>
)
}
export default AccordianBody