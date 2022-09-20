import React from 'react'

function Footer() {
    return (
        <footer class="footer_section">
            <div class="container-fluid">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-3 text-start text-white">
                        <div class="footer_col1">
                            <img src="image/logo.png" />
                            <p className='text-start'>Trade, lend, borrow, earn and more, in a growing suite of DeFi products from Wondercoin
                                Join us Now !!</p>
                            <ul >
                                <li><a href="#" ><i class="fab fa-twitter" ></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-discord"></i></a></li>
                                <li><a href="#"><i class="fab fa-medium"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-8 ">
                        <div class="row">
                            <div class="col-md-3 col-6">
                                <div class="footer_col2">
                                    <h2>Useful Link</h2>
                                    <ul>
                                        <li><a href="About.html">About Us</a></li>
                                        <li><a href="NFT.html">NFT</a></li>
                                        <li><a href="Buy_Coin.html">Buy Coin</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="footer_col2">
                                    <h2>Useful Link</h2>
                                    <ul>

                                        <li><a href="nft_open_market.html">NFT Open Market</a></li>
                                        <li><a href="LP_Farming.html">L.P Farming</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="footer_col2">
                                    <h2>Swap</h2>
                                    <ul>

                                        <li><a href="index.html">Swap Exchange</a></li>
                                        <li><a href="Wonder_Land.html">Wonder Land</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="footer_col2">
                                    <h2>Help</h2>
                                    <ul>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer