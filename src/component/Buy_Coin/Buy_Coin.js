import React from 'react'

function Buy_Coin() {
    return (
        <div className="container d-flex justify-content-center" >
            <div className="row d-flex justify-content-center" >
                <div className="col-md-12">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content text-start">
                            <div className="modal-header" >

                                <h2 className="modal-title" >
                                    Buy Coin
                                </h2>
                                <h5 className="modal-title" >
                                    Available Coin Balance :
                                    <span id="tokenbalance" style={{ color: "#fff" }}>0</span><span style={{ color: "#fff" }}> Coin</span>
                                </h5>

                                <h5 className="modal-title" >
                                    Available BNB Balance :
                                    <span style={{ color: "#fff" }} readOnly id="getBalance">0</span>
                                    <span style={{ color: "#fff" }}> BNB</span>

                                </h5>
                                <h5 className="modal-title " >
                                    Live Rate :&nbsp;
                                    <input type="text" className="input_width" id="txtchangevalue" style={{ color: "#fff" }} placeholder="1 Hudda Coin= 0.0270 USD  Coin" readOnly />
                                </h5>


                            </div>
                            <div className="modal-body " >
                                <div className="popup_net" >
                                    <span className="metamaskConnection" style={{ color: "#fff" }}>Please Connect wallet!</span>

                                    <div className="addNum">
                                        <div className="trxnumber mt-2">
                                            <input type="text" value="0" readOnly id="txtamount2" className="form5" placeholder="Enter Package Amount" />
                                            <span>USD</span>
                                        </div>

                                        <div className="trxnumber mt-2">
                                            <input type="text" readOnly id="txtTokenvalue2" className="form5" placeholder="Calculated Coin Value" />
                                            <span>Coin Value</span>
                                        </div>

                                        <div className="trxnumber mt-2">
                                            <input type="text" value="" readOnly id="txtTronvalue2" className="form5" placeholder="Calculated BNB Value" />
                                            <span>BNB Value</span>
                                        </div>

                                        <div className="numbtn">

                                            <button >+ 5$</button>
                                            <button >+ 50$</button>

                                            <button >+ 500$</button>
                                            <button >+ 1000$</button>
                                        </div>

                                        <input type="hidden" id="packageamount" name="name" autoComplete="off" />
                                        <div className="joinbtn">
                                            <button className="button" >Reset</button>
                                        </div>
                                    </div>


                                    <div className="row d-flex justify-content-center select_network mt-3 mb-3" >
                                        <div className="col-md-4 col-8 net_box d-flex justify-content-center " >
                                            <div className="text-center  ">
                                                <img src="image/click.png" className="img-fluid" />
                                                <h4>Buy Coin</h4>
                                            </div>
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
}

export default Buy_Coin