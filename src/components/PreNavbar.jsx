import React from 'react'
import "../styles/PreNavbar.css"
import { Link } from 'react-router-dom';


const cartIcon = <svg className="temp" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
const image=<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 10 10"><path fill="#FF2121" d="M167.359 0C204.195 157.43 335 228.092 335 346.434c0 45.526-16.433 84.553-49.33 117.088-33.021 32.534-72.379 48.878-118.23 48.878-45.731 0-85.008-16.344-118.029-48.878C16.472 430.991 0 391.964 0 346.434 0 227.529 130.921 158.063 167.359 0z"/><path fill="#FF8787" fill-rule="nonzero" d="M52.721 321.911c-1.319-8.32 4.355-16.139 12.676-17.459 8.321-1.319 16.14 4.355 17.459 12.676 4.351 27.115 13.555 50.472 26.139 68.9 12.548 18.381 28.434 31.74 46.089 38.822 7.827 3.136 11.627 12.028 8.491 19.854-3.136 7.828-12.028 11.627-19.855 8.491-23.311-9.351-43.979-26.54-59.961-49.947-15.006-21.977-25.942-49.566-31.038-81.337z"/></svg>
const PreNavbar = () => {
    return (
        <div className="preNav">
             {/* <div>
                 <a  href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
                 <a  href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
             </div> */}
             <div>
                {/* {image  } */}
             </div>
             <div>
             {/* <a  href="/#SignIn">SIGN IN</a> <span>|</span> */}
             <Link to="/signin">Sign In</Link> <span>|</span>
                 {/* <a  href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span> */}
                 <Link to="/signup">Sign UP</Link> <span>|</span>
                
                 {/* <a  href="https://store.mi.com/in/site/login"> {cartIcon} CART (0)</a> */}
                 <Link to="/register">Register</Link> <span>|</span>
               
             </div>
            
        </div>
    )
}

export default PreNavbar