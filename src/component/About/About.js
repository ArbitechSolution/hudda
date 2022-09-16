import React from 'react'
import "./About.css";
import { BsCheckCircleFill } from 'react-icons/bs';
function About() {
  return (
    <div>
        {/* <section> */}
			    <div className="container text-start mt-md-5 mt-3">
			        <div className="row">
			        	<div className="col-md-7">
			        		<h1>Future of Decentralized Exchange</h1>
			        		<p className="para">
			        			Hudda supports a variety of the most popular digital currencies and has a variety of features that make it the best place to start trading With the intention of enhancing investor protection, a number of specialised blockchain security and auditing companies have teamed up with Hudda We at Hudda are Building the Future of Decentralized Exchanges.
			        		</p>
							<p className="para">Hudda is the easiest place to buy and sell cryptocurrency. </p>
						 
			        		<h2>
			        			Hudda
			        		</h2>
			        		<p className="para">
								The Hudda Token is a digital asset that connects the Hudda Platform and its core functionality. It serves as the official pair token on the platform and combines staking and incentives.
								Users will be able to trade and exchange their tokens for alternative assets with safety and ease after Hudda launches. Hudda will be the first digital money for common people, marking a significant advancement in the global use of cryptocurrencies.
			        		</p>
			        		
			        		<h2>
			        			Has it been listed in any exchange?
			        		</h2>
			        		<p className="para">As of now it can be purchased through our website which can be linked to trust wallet, very soon it will be listed in DEX exchange and then token would be tradable, very soon it will be listed in many more exchanges.</p>
			        	</div>
			        	<div className="col-md-5">
			        		<img src="image/about.gif" width="110%" />
			        	</div>
			        </div>

			        <div className="row">
			        	<div className="col-md-12 mt-3">
			        	<h1>Which Wallets Supports Hudda?</h1>
						<p className="para">Many decentralised wallets, including MetaMask, TrustWallet, MathWallet, TokenPocket, WalletConnect, Binance Chain Wallet, and SafePal Walle, are fully compatible with Hudda and its token </p>
			        	 <br/>
			            </div>

			        	<div className="col-md-3">
			        		<BsCheckCircleFill size={23} style={{color: '#e35760'}} className='me-3'/>
			        		<span >No sign-up</span>
			        	</div>
			        	<div className="col-md-3">
                        <BsCheckCircleFill size={23} style={{color: '#e35760'}} className='me-3'/>
			        		<span >18 partners</span>
			        	</div>

			        	<div className="col-md-3">
                        <BsCheckCircleFill size={23} style={{color: '#e35760'}} className='me-3'/>
			        		<span >More than 900 coins</span>
			        	</div>
			        	<div className="col-md-3">
                        <BsCheckCircleFill size={23} style={{color: '#e35760'}} className='me-3'/>
			        		<span >Fixed and floating rates</span>
			        	</div>

			        </div>
			        <br/>
			        <div className="row">
			        	
			        	<div className="col-md-3">
                        <BsCheckCircleFill size={23} style={{color: '#e35760'}} className='me-3'/>
			        		<span >No limits</span>
			        	</div>
			        	<div className="col-md-3">
                        <BsCheckCircleFill size={23} style={{color: '#e35760'}} className='me-3'/>
			        		<span >24/7 support</span>
			        	</div>

			        	<div className="col-md-3">
                        <BsCheckCircleFill size={23} style={{color: '#e35760'}} className='me-3'/>
			        		<span >Affiliate program</span>
			        	</div>
			        	<div className="col-md-3">
                        <BsCheckCircleFill size={23} style={{color: '#e35760'}} className='me-3'/>
			        		<span >User-friendly interface</span>
			        	</div>

			        </div>
			        <br />
			        
			        
			    </div>
			 {/* </section> */}
    </div>
  )
}

export default About