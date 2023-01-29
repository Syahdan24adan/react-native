import React, {useState, useEffect} from 'react'
import '../App'
import axios from 'axios'

let Conten = () => {
    let  [data,setData] = useState([]);

    useEffect(() => {
        axios({
            method:"GET",
            url: `https://www.scorebat.com/video-api/v3/feed/?token=MTM4MDBfMTY0NTI2NzIyNV85MjkzODhhYjVmODAxODYwYzhkYjJkMjdkYzhlMDQ1NDRlYTVkZWVj`,
        }).then(res=> {
            console.log(res.data);
            setData(res.data.response);
        }).catch(e => console.log(e))
    },[]);
  return (
    <div className='conten-container'>
        {data.map((item) => (
            <div 
                className='itemDiv' 
                key={item.title} 
                onClick={()=>window.open(item.matchviewUrl)}>
                <div className='itemHeading'><h4>{item.title}</h4></div>
                <div className='itemImage'>
                    <img src={item.thumbnail} alt="" />
                </div>
                <div><p>{item.date}</p></div>
            </div>
        ))}
    </div>
  )
}

export default Conten