import React from 'react';
// import { useNavigate } from "react-router-dom";
import { API } from "../globel";
import { useEffect, useState } from 'react';
import Vendorlist from "./Vendorlist";
import Addvendor from "./Addvendor";


function Vendors() {
    // const navigate = useNavigate();
    const [vendorlist, setVendorlist] = useState([]);

    const getvendor = (() => {
        fetch(`${API}/Quotation/getvendorlist`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => setVendorlist(data))
    })
    useEffect(() => getvendor(), []);
    return (
        <>
            <div className='dash'>
                <table className="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">S.no</th>
                            <th scope="col">Vendor List</th>
                        </tr>
                    </thead>
                    <tbody class="table-primary">
                        {vendorlist.map(({ vendorlist }) => (
                            <tr>
                                <th scope="row">1</th>
                                <td> <Vendorlist vendorlist={vendorlist} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Addvendor />
        </>
    )
}

export default Vendors