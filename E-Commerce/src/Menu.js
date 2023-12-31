import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export default function Menu()

{
    const carts = useSelector(state=>state.carts.value.length);
    return<>
      <div className="row">
         <div className="col-xl-10 col-lg-10 col-xm-10">
            <h1 className="alert-danger text-center">Shopping-Cart</h1>
         </div>
                <div className="col-xl-2 col-lg-2">
                    
               <Link to="/"><b>Home</b></Link>
                &nbsp; &nbsp; &nbsp;
                <Link to="/cart"><b>Cart : {carts}</b></Link>
            </div>
        </div>
    </>
}