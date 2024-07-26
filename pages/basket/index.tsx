import { Data } from "@/db";
import { useAppDispatch, useAppSelector } from "@/store";
import { removefrombasket } from "@/store/authslice";
import { initializedata } from "..";



export default function Basket() {
    initializedata()
    const BasketState = useAppSelector((state) => state.auth.authState);
    const dispatch = useAppDispatch();


    function removeBasketItem(id: string | undefined) {
        console.log(id)
        dispatch(removefrombasket({ id: id }))
        return 123
    }
    
    let Price = 0


    function price(price: number) {

        Price = Price + price


        return price;
    }

    return (
        <>
            {BasketState.length == 0 ? (<><br /><h1 style={{ textAlign: 'center' }}>Your basket is currently Empty</h1><br /><p>You can add items to your basket in the shop</p><br /><br /><br /><br /></>) : ''}
            <table>
                {/* <thead>
                    <tr>
                        <th></th>
                        <th>Header 2</th>
                        <th>Header 2</th>
                    </tr>
                </thead> */}
                <tbody>
                    {BasketState.map((item) => {
                        return (<tr>
                            <td><img width="30px" src={Data?.products.find((element) => (element.UUID == item.id))?.img} alt="Product Image" /></td>

                            <td><a href={`product/${Data?.products.find((element) => (element.UUID == item.id))?.title.replace(/\s/g, '')}`}>{Data?.products.find((element) => (element.UUID == item.id))?.title}</a></td>
                            <td>{Data?.products.find((element) => (element.UUID == item.id))?.benefit}</td>
                            <td>{Data?.products.find((element) => (element.UUID == item.id))?.currency}{price(Data?.products.find((element) => (element.UUID == item.id))?.price ?? 0)}</td>
                            {/* <td><button onClick={removeBasketItem('asdaf')}>Remove</button></td> */}
                            <td> <button onClick={() => removeBasketItem(Data?.products.find((element) => (element.UUID == item.id))?.UUID)} className="btn btn-outline-danger" >
                                Remove
                            </button></td>
                        </tr>
                        )
                    }
                    )}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total: £{Price}</td>
                        <td></td></tr>
                </tbody>
            </table>
            <br />
            <br />
            <br />
        </>
    )
}

