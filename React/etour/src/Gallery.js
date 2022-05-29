import React, { useState } from 'react'
import './gallery.css'



const Gallery = () => {
    let data =[
        {
            id:1,
            imgSrc:'kashmir.jpg',
            title:"Kashmir",
        },
        {
            id:2,
            imgSrc:'himachal.jpg',
            title:"Himachal",
        },
        {
            id:3,
            imgSrc:'manali3.jpg',
            title:"Manali",
        },
        {
            id:4,
            imgSrc:'darjeeling.jpg',
            title:"Darjeeling",
        },
        {
            id:5,
            imgSrc:'ooty.jpg',
            title:"Ooty",
        },
        {
            id:6,
            imgSrc:'nainital.jpg',
            title:"Nainital",
        },
        {
            id:7,
            imgSrc:'maharashtra.jpg',
            title:"Maharashtra",
        },
        {
            id:8,
            imgSrc:'asia.jpg',
            title:"Agra",
        },
        {
            id:9,
            imgSrc:'kerala.jpg',
            title:"Kerala",
        },
        {
            id:10,
            imgSrc:'europe.jpg',
            title:"Europe",
        },
        {
            id:11,
            imgSrc:'france.jpg',
            title:"France",
        },
        {
            id:12,
            imgSrc:'dubai1.jpg',
            title:"Dubai",
        },
        {
            id:13,
            imgSrc:'japan.jpg',
            title:"Japan",
        },
        {
            id:14,
            imgSrc:'mauritius.jpg',
            title:"Mauritius",
        },
        {
            id:15,
            imgSrc:'hk.jpg',
            title:"Philipinnes",
        },
        {
            id:16,
            imgSrc:'i1.jpg',
            title:"HongKong",
        },
        {
            id:17,
            imgSrc: 'i1.jpg',
            title:"DisneyLand",
        },
        {
            id:18,
            imgSrc: 'andaman.jpg',
            title:"AndamanNicobar",
        }
    ]
        const [model, setModel] = useState(false);
        const [tempImgSrc, setTempImgSrc] = useState('');
        
        const getImg = (imgSrc) =>{
            setTempImgSrc(imgSrc);
            setModel(true);
        }

        return (
            <>

            <div className={model? "model open" : "model"}>
                <img src={tempImgSrc} alt="banner"/>
           
                <button type="button"  onClick={() => setModel(false)}className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="gallery">
                { data.map((item, index)=>{
                    return(
                        <div className="pics" key={index} >
                            <h5><i>{item.title}</i></h5>
                            <img src={item.imgSrc} style={{width:"100%"}} alt="banner"/>
                        </div>
                    )
                })}
            </div>

     
            </>
        )
    
}

export default Gallery
