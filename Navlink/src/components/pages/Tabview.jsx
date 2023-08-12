
import '../pages/tabview.css'
import React, { useEffect } from 'react'

const Tabview = () => {
    const mainfunction = (e) => {
        let arr = document.querySelectorAll('.bottomdiv');
        let button = document.querySelectorAll('.btn');
        for (let a of arr) {
            a.style.display = "none"
        }
        for (let a of button) {
            a.style.color = "antiquewhite"
        }
        button[e].style.color = 'red'
        arr[e].style.display = "block"
        console.log(e);
    }
    useEffect(() => {
        mainfunction(0)
    }, [])

    return (
        <div className='container'>
            <div className='d-flex justify-content-center flex-column vh-100 w-100'>
                <div className='bg-primary p-2'>
                    <button className="btn p-2" onClick={() => { mainfunction(0) }}>Home</button>
                    <button className="btn p-2" onClick={() => { mainfunction(1) }}>About</button>
                    <button className="btn p-2" onClick={() => { mainfunction(2) }}>Contact</button>
                    <button className="btn p-2" onClick={() => { mainfunction(3) }}>Service</button>
                </div>
                <div className='bottomdiv'>
                    HomeLorem ipsum dolor sit amet consectetur, adipisicing elit. Minima sit voluptates numquam iure autem, ipsa nulla iste dolorum aliquam amet, explicabo saepe et sint aperiam quos repellat labore! A consequatur soluta eos dolore velit, repudiandae nobis animi laboriosam doloremque repellendus eaque perspiciatis facere quas error sed? Quaerat facilis nisi numquam!
                </div>
                <div className='bottomdiv'>
                    AboutLorem ipsum dolor sit amet consectetur, adipisicing elit. Minima sit voluptates numquam iure autem, ipsa nulla iste dolorum aliquam amet, explicabo saepe et sint aperiam quos repellat labore! A consequatur soluta eos dolore velit, repudiandae nobis animi laboriosam doloremque repellendus eaque perspiciatis facere quas error sed? Quaerat facilis nisi numquam!
                </div>
                <div className='bottomdiv'>
                    ContactLorem ipsum dolor sit amet consectetur, adipisicing elit. Minima sit voluptates numquam iure autem, ipsa nulla iste dolorum aliquam amet, explicabo saepe et sint aperiam quos repellat labore! A consequatur soluta eos dolore velit, repudiandae nobis animi laboriosam doloremque repellendus eaque perspiciatis facere quas error sed? Quaerat facilis nisi numquam!
                </div>
                <div className='bottomdiv'>
                    ServiceLorem ipsum dolor sit amet consectetur, adipisicing elit. Minima sit voluptates numquam iure autem, ipsa nulla iste dolorum aliquam amet, explicabo saepe et sint aperiam quos repellat labore! A consequatur soluta eos dolore velit, repudiandae nobis animi laboriosam doloremque repellendus eaque perspiciatis facere quas error sed? Quaerat facilis nisi numquam!
                </div>
            </div>
        </div>
    )
}

export default Tabview