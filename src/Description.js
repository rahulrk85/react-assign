import React, { useEffect } from 'react'

const Description = () => {

  const fetchTrailer = async()=>{
    const data =await fetch('https://api.unsplash.com/photos/?client_id=V8qbK3kkuX30h8oRjbpciEhs4uf3vmfayBohJKR5u9c')

    const json = await data.json();
    const image = json[0].urls.regular;
    return image;

}

useEffect(()=>{
   fetchTrailer();
},[]);

  return ( 
    <div className='w-full p-4 m-6 text-center justify-center'>
        <h1 className='pb-2 font-bold'>Customer details Here</h1>
        <p className='w-2/3 ml-64'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='flex m-4 p-4 ml-96 mt-10'>
        <div className='p-4 m-2'> 
        <img className='w-64 h-64 py-2' src='https://images.unsplash.com/photo-1713190200767-f7d8a58e84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE0Mzd8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxMzI4NjI4NHw&ixlib=rb-4.0.3&q=80&w=400' alt='images'/>
        <img className='w-64 h-64 py-2' src='https://images.unsplash.com/photo-1712945382945-8bdfe31d4335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE0Mzd8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxMzI4NjI4NHw&ixlib=rb-4.0.3&q=80&w=400' alt='images'/>
        <img className='w-64 h-64 py-2' src='https://images.unsplash.com/photo-1712277851184-fe23844036ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE0Mzd8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxMzI4NjI4NHw&ixlib=rb-4.0.3&q=80&w=400' alt='images'/>
        </div>
        <div>
        <img className='w-64 h-64 py-2' src='https://images.unsplash.com/photo-1712781797301-ec9ee12b52b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE0Mzd8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxMzI4NjI4NHw&ixlib=rb-4.0.3&q=80&w=400' alt='images'/>
        <img className='w-64 h-64 py-2' src='https://images.unsplash.com/photo-1710101749861-aef7c032d24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE0Mzd8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxMzI4NjI4NHw&ixlib=rb-4.0.3&q=80&w=400' alt='images'/>
        <img className='w-64 h-64 py-2' src='https://images.unsplash.com/photo-1712839398257-8f7ee9127998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTE0Mzd8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxMzI4NjI4NHw&ixlib=rb-4.0.3&q=80&w=400' alt='images'/>
        </div>
        </div>
    </div>
  )
}

export default Description;