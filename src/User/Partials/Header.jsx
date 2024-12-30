import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top " >
  <div className="container-fluid">
    <NavLink className="navbar-brand " ><img src="picture/logovip.png"  /> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto ">
        <li className="nav-item">
          <NavLink className="nav-link active fw-bold text-primary" aria-current="page">TRANG CHỦ</NavLink>
        </li>
        <li className="nav-item ms-2">
          <NavLink className="nav-link fw-bold text-primary" >BÀI THI</NavLink>
        </li>
        <li className="nav-item ms-2">
          <NavLink className="nav-link fw-bold text-primary" >GIỚI THIỆU</NavLink>
        </li>
        <li className="nav-item ms-2">
          <NavLink className="nav-link fw-bold text-primary" >GÓP Ý</NavLink>
        </li>
        <li className="nav-item ms-2">
          <NavLink className="nav-link fw-bold text-primary" >HỎI ĐÁP</NavLink>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
      </ul>
      <form className="d-flex   ">
        <div className="dropdown me-5 pe-4">
          <button className="btn btn-outline-primary dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul className="dropdown-menu">
            <li>  <NavLink className="dropdown-item fw-bold px-2 text-primary" > <i className="bi bi-star-fill text-warning" /><span className="ms-2">ĐỖI MẬT KHẨU</span></NavLink></li>
            <li> <NavLink className="dropdown-item fw-bold px-2 text-primary" > <i className="bi bi-star-fill text-warning" /><span className="ms-2">QUÊN MẬT KHẨU</span></NavLink></li>
            <li><NavLink className="dropdown-item fw-bold px-2 text-primary"  > <i className="bi bi-star-fill text-warning" /> <span className="ms-2">ĐĂNG XUẤT</span></NavLink>
            </li>
          </ul>
        </div>
        <NavLink  className="btn btn-outline-primary fw-bold ms-3" >ĐĂNG NHẬP</NavLink>
        <NavLink  className="btn btn-outline-danger ms-3 fw-bold" >ĐĂNG KÍ</NavLink>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Header