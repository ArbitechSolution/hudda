import React, { useState } from 'react'

function Swap_Exchange() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowOne, setModalShowOne] = useState(false);
    return (
        <div className=''>
            <section>
                <div className="container d-flex justify-content-center" >
                    <div className="row" >
                        <div className="col-md-5 col-12 " >

                            <div className="container py_0 tab-pane active">
                                <div className="exchange_tab" >
                                    <div className="exchange_wrap1 " >
                                        <div className="exchange_hd" >
                                            <ul className="nav nav-pills pool_tab" role="tablist" >
                                                <li className="nav-item" >
                                                    <a className="nav-link active a-tag" href="" style={{ textDecoration: 'none' }}>Exchange Crypto</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="exchange_tools" >
                                            <ul className="nav nav-pills pool_tab" role="tablist" >


                                                <li className="nav-item">
                                                    <a className="nav-link a-tag text-white" style={{ textDecoration: 'none',cursor: "pointer" }}
                                                    onClick={() => setModalShowOne(true)}
                                                    // style={{}}
                                                    >Buy Crypto</a>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                    <br />
                                    <h6>You Send</h6>
                                    <div className="exch_bg">

                                        <div className="exchange_wrap" style={{ padding: "8px 0PX 6PX 1PX", }}>
                                            <div className="exchange_hd ex_font width_fluid" >
                                                <input type="text" className="input_set" placeholder="0.0" />
                                            </div>
                                            <div className="exchange_tools">

                                                <div className="bnb_btn bnb_position">
                                                    <button onClick={() => setModalShow(true)}>
                                                        <img src="image/bit.png" />
                                                        <span><b>BTC</b></span>
                                                        <i className="fa fa-chevron-down"></i>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="exchange_arrow">
                                        <h6>You Get</h6>
                                        <div>
                                            <i className="fa fa-refresh" aria-hidden="true"></i>
                                        </div>

                                    </div>
                                    <div className="exch_bg mb-4">

                                        <div className="exchange_wrap" style={{ padding: "8px 0PX 6PX 1PX" }}>
                                            <div className="exchange_hd ex_font width_fluid ">
                                                <input type="number" className="input_set" placeholder="0.0" />
                                            </div>
                                            <div className="exchange_tools">

                                                <div className="bnb_btn bnb_position">

                                                    <button onClick={() => setModalShow(true)}>
                                                        <img src="image/eth.png" />
                                                        <span><b>ETH</b></span>
                                                        <i className="fa fa-chevron-down"></i>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="wallet_btn mr_set">
                                        <button className="btn button btn-success" >VIEW OFFERS</button>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className="col-md-1"></div>
                        {modalShowOne ? (
                <div className="col-md-6  py_0 heading" show={modalShowOne}
                onHide={() => setModalShowOne(false)}>
                    <div className="exchange_tab py_0 ">


                        <div className="tab">
                            <button className="tablinks" >Sort by rate</button>
                            <button className="tablinks" >Sort by ETA <i
                                className="fa fa-question-circle-o" aria-hidden="true"></i></button>

                        </div>

                        <div id="London" className="table-responsive-sm" >
                            <table >
                                <tr>
                                    <th className="rate">Rate</th>
                                    <th className="rate">ETA</th>
                                    <th className="rate">Partner</th>
                                </tr>
                                <tr>
                                    <td className="rate_number">0.03980848</td>
                                    <td>1-8 min</td>
                                    <td><img src="image/mercurio.png" />&nbsp;Mercuryo</td>
                                    <td className="btn_best">BEST OFFER</td>
                                </tr>
                                <tr>
                                    <td className="rate">Type</td>
                                    <td className="rate">Support Rate</td>
                                    <td className="rate">Rating</td>

                                </tr>
                                <tr>
                                    <td>~ Floating</td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                                aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="">
                                            <img src="image/star.png" width="20px" />
                                            <img src="image/star.png" width="20px" />
                                            <img src="image/star.png" width="20px" />
                                            <img src="image/star.png" width="20px" />
                                            <img src="image/star.png" width="20px" />
                                        </div>
                                    </td>
                                    <td className="btn_buy">
                                        Buy
                                    </td>
                                </tr>

                            </table>
                        </div>

                        


                    </div>
                </div>
            ) : <>
                <div className="col-md-6  py_0 heading text-start" >

                    <h1 className="heading_more">
                        An Ocean of Opportunities
                    </h1>
                    <p className="more">
                        Hudda is intended to operate in the financial sector without the involvement of any regulatory bodies or project owners. A masterwork in passive income and DeFi rewards
                        The Hudda ecosystem was created with participants' rewards in mind.
                    </p>
                </div>
            </>}
                    </div>
                </div>
            </section>

            <section className="how-section padding-top padding-bottom bg_img mt-5" >
                <div className="container d-flex justify-content-center flex-column" >
                    <div className="row justify-content-center ps-3" >
                        <div className="col-lg-8 d-flex justify-content-center" >
                            <div className="section-header  text-center ">
                                <h2 className="section-header__title">A Complete DeFi Ecosystem</h2>
                                <p className="text-centersss mt-2" style={{ fontSize: '18px' }}>Hudda offers DeFi technologies so that enterprises and token owners can confidently acquire, exchange, produce, and secure crypto assets.Numerous innovative features that Hudda will offer you will radically transform the cryptocurrency market.</p>

                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center mt-3" >
                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="how-item">
                                <div className="how-item__thumb">
                                    <i className="las fa fa-user-plus"></i>
                                    <div className="badge badge--lg badge--round radius-50">01</div>
                                </div>
                                <div className="how-item__content">
                                    <h4 className="title">Margin Trading </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="how-item">
                                <div className="how-item__thumb">
                                    <i className="las fa fa-desktop"></i>
                                    <div className="badge badge--lg badge--round radius-50">02</div>
                                </div>
                                <div className="how-item__content">
                                    <h4 className="title">Lending </h4>
                                </div>
                            </div>
                        </div>



                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="how-item1">
                                <div className="how-item__thumb">
                                    <i className="las fa fa-database"></i>
                                    <div className="badge badge--lg badge--round radius-50">03</div>
                                </div>
                                <div className="how-item__content">
                                    <h4 className="title">Liquidity Providing</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {modalShow ? (
                <div id="myNav8" className="overlay8 textcenter" show={modalShow}
                    onHide={() => setModalShow(false)}>
                    <div className="setting_close">
                        <span className="tokenset font_normal">Select a token <i className="fa fa-question"></i></span>
                        <span onClick={() => setModalShow(false)}>&times;</span>
                    </div>
                    <div className="overlay8-content text-left" >
                        <div className="swapbg8">
                            <div className="select_token">
                                <div className="select_input">
                                    <input type="text" placeholder="Search name or paste address" className="eeRXNx" />
                                </div>
                            </div>
                            <div className="">
                                <div className="para">
                                    <p>Common bases</p>

                                </div>
                                <div className="eth d-flex flex-wrap">
                                    <div className="eth_img">
                                        <img src="image/eth1.jpg" /> ETH
                                    </div>
                                    <div className="eth_img">
                                        <img src="image/sushi.jpg" /> SUSHI
                                    </div>
                                    <div className="eth_img">
                                        <img src="image/wbtr.jpg" /> WBTR
                                    </div>
                                    <div className="eth_img">
                                        <img src="image/mim.jpg" />  MIM
                                    </div>
                                    <div className="eth_img">
                                        <img src="image/spell.webp" />  SPELL
                                    </div>
                                    <div className="eth_img">
                                        <img src="image/ice.webp" /> ICE
                                    </div>
                                    <div className="eth_img">
                                        <img src="image/usdc.jpg" /> USDC
                                    </div>
                                    <div className="eth_img">
                                        <img src="image/usdt.jpg" /> USDT
                                    </div>
                                    <div className="eth_img">
                                        <img src="image/dai.png" />  DAI
                                    </div>
                                    <div className="eth_img">
                                        <img src="image/frax.webp" />  FRAX
                                    </div>

                                </div>

                                <div className="eth">
                                   


                                </div>


                                <div className="chose_token">

                                    <div className="token_name">Token Name</div>
                                    <div className="token_arrow"> <img
                                        src="image/arrow_down.png" /> </div> </div> <div
                                            className="all_token scroll_track">

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bnb.png" /> &nbsp;&nbsp;BNB</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/ADA.png" /> &nbsp;&nbsp;ADA</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/ALPHA.png" /> &nbsp;&nbsp;ALPHA</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/ANKR.png" /> &nbsp;&nbsp;ANKR</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/ATM.png" /> &nbsp;&nbsp;ATM</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/ATOM.png" /> &nbsp;&nbsp;ATOM</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/BAKE.png" /> &nbsp;&nbsp;BAKE</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bLBT.png" /> &nbsp;&nbsp;bLBT</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/usdt.png" />&nbsp;&nbsp; USDT</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/wbnb.png" />&nbsp;&nbsp; WBNB</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/1inch.webp" /> &nbsp;&nbsp;1INCH</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/aave.jpg" /> &nbsp;&nbsp;AAVE</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/adx.webp" /> &nbsp;&nbsp;ADX</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/aer.webp" /> &nbsp;&nbsp;AERGO</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/aethc.webp" /> &nbsp;&nbsp;aETHc</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/ageur.webp" /> &nbsp;&nbsp;agEUR</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/agld.webp" /> &nbsp;&nbsp;AGLD</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/akro.webp" /> &nbsp;&nbsp;AKRO</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/alcx.webp" /> &nbsp;&nbsp;ALCX</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/aleph.webp" /> &nbsp;&nbsp;ALEPH</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/alpa.webp" /> &nbsp;&nbsp;ALPA</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/alpaca.webp" /> &nbsp;&nbsp;ALPACA</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/alpha.webp" /> &nbsp;&nbsp;ALPHA</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/alusd.webp" /> &nbsp;&nbsp;alUSD</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/amp.jpg" /> &nbsp;&nbsp;AMP</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/ampl.webp" /> &nbsp;&nbsp;AMPL</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/angle.webp" /> &nbsp;&nbsp;ANGLE</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/ankr.webp" /> &nbsp;&nbsp;ANKR</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/ant.jpg" /> &nbsp;&nbsp;ANT</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/ant.jpg" /> &nbsp;&nbsp;ANT</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/apl3.webp" /> &nbsp;&nbsp;API3</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/apw.webp" /> &nbsp;&nbsp;APW</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/arch.webp" /> &nbsp;&nbsp;ARCH</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/arcx.webp" /> &nbsp;&nbsp;ARCX</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/armor.webp" /> &nbsp;&nbsp;ARMOR</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/arnxm.jpg" /> &nbsp;&nbsp;ARNXM</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/asg.webp" /> &nbsp;&nbsp;ASG</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/assy.webp" /> &nbsp;&nbsp;ASSY</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/attr.webp" /> &nbsp;&nbsp;ATTR</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/auction.webp" /> &nbsp;&nbsp;AUCTION</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/audio.webp" /> &nbsp;&nbsp;AUDIO</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/avastr.webp" /> &nbsp;&nbsp;AVASTR</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/axs.webp" /> &nbsp;&nbsp;AXS</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/axs.webp" /> &nbsp;&nbsp;AXS</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bab.webp" /> &nbsp;&nbsp;BAB</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bac.webp" /> &nbsp;&nbsp;BAC</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/badger.webp" /> &nbsp;&nbsp;BADGER</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bakc.webp" /> &nbsp;&nbsp;BAKC</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bal.webp" /> &nbsp;&nbsp;BAL</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bal.webp" /> &nbsp;&nbsp;BAL</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/banana.webp" /> &nbsp;&nbsp;BANANA</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/band.webp" /> &nbsp;&nbsp;BAND</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bank.webp" /> &nbsp;&nbsp;BANk</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/base.webp" /> &nbsp;&nbsp;BASE</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>

                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bask.webp" /> &nbsp;&nbsp;BASK</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bcp.webp" /> &nbsp;&nbsp;BCP</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bdi.webp" /> &nbsp;&nbsp;BDI</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                    <div className="token_list">
                                        <div className="token_icon">
                                            <h2><img src="image/bfc.webp" /> &nbsp;&nbsp;BFC</h2>
                                        </div>
                                        <div className="token_list"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <>
            </>}
            

        </div>
    )
}

export default Swap_Exchange