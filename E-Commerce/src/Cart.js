import {useDispatch, useSelector } from "react-redux";
import { RemoveItem,IncrementQty,DecerementQty,EmptyCard } from "./CartSlice";
export default function Cart()
{
    const carts = useSelector(state=>state.carts.value);
   const dispetch = useDispatch();
   return<>
    <h1 className="alert-primary">Cart Component</h1>
    <button onClick={()=>dispetch(EmptyCard())} className="btn btn-success">Empty Card</button>
    <table className="table">
        <thead className="alert-secondary">
            <tr>
                <th>S.No.</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Operation</th>
            </tr>
        </thead>
        <tbody>
            {carts.map((ob,index)=><tr>
                <td>{index+1}</td>
                <td><img src={ob.images[0]} height={50} width={50}/></td>
                <td>{ob.title}</td>
                <td>{ob.price}</td>
                <td>
                    <button onClick={()=>dispetch(DecerementQty(ob.id))} className="btn btn-info">-</button>
                    &nbsp; &nbsp;
                    <b>{ob.qty}</b>
                    &nbsp; &nbsp;
                    <button onClick={()=>dispetch(IncrementQty(ob.id))} className="btn btn-info">+</button>
                </td>
                <td>{ob.price*ob.qty}</td>
                <td>
                    <button onClick={()=>dispetch(RemoveItem(ob))} className="btn-sm btn btn-danger">Remove</button>
                </td>
            </tr>)}
        </tbody>
    </table>
    </>
}