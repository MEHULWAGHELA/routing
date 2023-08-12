import React, { useEffect } from 'react'
import Header from '../Header'

const Home = () => {
    useEffect(() => {
        /* when we unmount this component then return is call we can do anytask that time*/
        return () => {
            console.log("component Unmout");
        }
    }, [])

    return (
        <div>
            <div>Home</div>
            <div>
                <p>Home paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusantium nam assumenda eveniet necessitatibus non? Quasi ab ipsum cupiditate ad, molestias neque tempora nostrum doloremque facilis commodi itaque nisi magnam architecto accusamus? Aperiam, doloribus rerum! Temporibus perspiciatis quas nesciunt. Deleniti soluta aliquid corrupti enim similique laudantium tempora eaque, iusto voluptate atque? Eveniet pariatur beatae voluptatem ex autem qui veniam quo illum enim voluptate dolorem temporibus sequi hic impedit quasi tenetur, asperiores perspiciatis animi! Facere dignissimos nemo ex, eveniet laborum reiciendis corporis nulla odio blanditiis dolores deleniti rem, quasi suscipit dolorem exercitationem molestias. Ex quibusdam a, non atque quae voluptatibus voluptate. </p>
            </div>
        </div>
    )
}
export default Header(Home)
