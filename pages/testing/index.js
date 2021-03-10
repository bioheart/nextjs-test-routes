import React from 'react'
import { useRouter } from 'next/router'


const index = () => {
    const router=useRouter()
    return (
        <div>
            <span>Testing page for route.</span><br/>
            
        </div>
    )
}

export default index