import React from 'react'
import Auth from '../../imgs/Blog_Imgs/Author_Imgs/Jinal Raval.png'
import {FaTwitter , FaLinkedinIn , FaGithub} from 'react-icons/fa';
import eye from '../../imgs/eye.svg'
import Blog2 from '../../imgs/Blog_Imgs/Post_Imgs/oct21_2.webp'
import Share_Blog from './Share_Blog';
import Img1 from '../../imgs/In_Blog_Imgs/oct21_blog2_1.jpg'
import Img2 from '../../imgs/In_Blog_Imgs/oct21_blog2_2.jpg'

export default function Oct21_Blog2() {
  return (
    <>
      <div className='container pt-28 w-max m-auto '>
        <div className="py-5 ">
          <h1 className="mb-20 pb-5 border-b-4 border-yellow text-6xl font-bold w-max m-auto text-primary">Blog Details</h1>
        </div>
        <img src={Blog2} className="scale-[0.8] w-[98.5vw] h-auto lg:scale-[1]" alt="..." />
      </div>
      <div>
        <div className='countiner bg-white border-2 border-gray-100 shadow-lg w-[90%] lg:w-[60%] m-auto h-[max-content] my-10 px-8 pt-10 lg:px-14 relative top-[0px] lg:top-[-400px] pb-10'>
          <h1 className='h1 text-2xl font-bold lg:text-5xl'>Blockchain</h1>
          <div className='pt-5'>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">#Git</span>
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">#GitHub</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">#Javascrpit</span>
            <span className='"bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"'>#WebDev</span>
          </div>
          <div className='flex mt-5'>
            <img className="w-10 h-10 rounded-full " src={Auth} alt="Rounded avatar" />
            <span>
              <h4 className='mx-5 my-0'>Jinal Raval</h4>
              <h2 className='text-gray-400 text-sm ml-4'>~CE Batch-2k24 | 5 min read</h2>
            </span>
          </div>

          <div className='pt-5'>
            <div className='text-base'>
            Blockchain is the core technology used to create the cryptocurrencies, like bitcoin. As part of the 4th industrial revolution since the invention of steam engine, electricity, and information technology, blockchain technology has been applied in many areas such as finance, judiciary, and commerce. The current paper focused on its potential educational applications and explored how blockchain technology can be used to solve some education problems.
            </div>
          </div>
          <div>
            <img src={Img1} alt="Couldn't load this image..." className="center w-[100%]"></img>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            Blockchain technology is also known as distributed ledger technology. It allows participants to secure the settlement of transactions, achieve the transaction, and transfer of assets at a low-cost. A sample flow of cryptocurrency blockchain transactions can be seen as follows. User A initiates a transaction to User B via a peer-to-peer blockchain network. A cryptographic proof of identity (a pair of public key and private key) is used by the network to identify user A and user B uniquely. The transaction will then be broadcasted to the memory pool of the blockchain network waiting for transaction verification and validation. The new block is generated by obtaining a certain number of approved nodes; this is called reaching consensus.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            After reaching consensus, a new “block” on the entire blockchain network is formed, and each node updates its respective copy of the blockchain ledger. This block contains all the transactions that occurred during this time. It is “linked” to the original block in the network through the digital signature. Each transaction in a block is tagged by a specific timestamp. The two blocks are also linked by a timestamp. Therefore, the data on the blockchain has a property of time, and the length of the chain is continuously growing. Blockchain uses specialized hardware to construct sizable cryptographic data chains, and SHA-256 hash function is used to prevent the tampering of data of third-party users. Any attempt to change even just a bit of information will break the existing chains. In short, blockchain is a decentralized and trustworthy digital public ledger.
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
              From the technical point of view, blockchain technology has four features:
              <div className="flex flex-wrap">
                <div className='text-img'>
                  <div ul>
                    <li>Decentralization</li>
                    <li>Traceability</li>
                    <li>Immutability</li>
                    <li>Currency properties</li>
                  </div>
                </div>
                <div className="">
                  <img src={Img2} alt="Couldn't load this image..." className='w-full h-full lg:w-[40%] center'></img>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <div className='text-base'>
            The realization of 21st century's security, privacy, trust, and equality can be implemented by blockchain technology. Security refers to the protection of valuable properties and information. Nowadays some people have property but cannot prove ownership, such as intellectual property disputes. It may lead to conflict with others. Blockchain technology can be used by checking the records in the database to prove the properties.
            </div>
          </div>

        </div>

        <Share_Blog />
      </div>




    </>
  )
}
