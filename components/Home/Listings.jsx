import { useMarketplace } from '@thirdweb-dev/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const style =  {

}


const Listings = () => {
    const [listings, setListings] = useState([])
    const marketplace = useMarketplace('0x9d47a34952d77C03F8EAa4126AEeE67781A23183')


     
useEffect (() =>{
    getListings()
}, [])


    const getListings = async ()=>{
        try {
            const list = await marketplace.getActiveListings()
        
        setListings(list)
        } catch (error) {
            console.log(error)
        }
    }
    return (
    <div className={style.wrapper}>
        
{listings.length > 0 ? (
    <>
   {listings?.map((listing, index) => (
    <div key={index}>NFT CARD</div>
   ))}
    </>
):(
    <div>Loading..........</div>
)}
    </div>
  )
}

export default Listings