import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'
import style from "./NavBar.module.css"





function Navbar () {

  return (
    <div className={style.Navbar}>
<ul>

<li> <Link className={style.linkClass} to='/'>Home</Link>  </li>
<li> <Link className={style.linkClass} to='category/1'>Juegos</Link></li>
<li><Link className={style.linkClass} to='category/2'>Consolas</Link></li>
<li><Link className={style.linkClass} to='category/3'>Accesorios</Link></li>
<li><Link className={style.linkClass} to="./Carrito"> <CartWidget /> </Link>  </li>




</ul>

 </div>
 
  )
}

export default Navbar
