import { useSelector } from "react-redux"
import AccordianBody from "./AccordianBody"

const Cart=()=>{
    const items=useSelector((store)=>store.cart.items)
return(
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            {items.map((item,index)=><AccordianBody data={item.data} key={index} />)}
        </div>
    </div>
)
}
export default Cart