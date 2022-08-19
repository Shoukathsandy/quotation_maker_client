import * as React from 'react';
import "../App.css";
import Login from "./login";


export default function Modal({ setOpenModal }) {

  

    return (
     
        <div className="modalContainer">
            <div className="container">

                <div className="row justify-content-center" >

                    <div classNmae="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5" >
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-12">
                                          <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                           <Login />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>


    )
};