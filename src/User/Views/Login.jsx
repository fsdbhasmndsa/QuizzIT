import React from 'react'

const Login = () => {
  return (
    <div className="row hd  pt-3 pb-5  m-0">
  <div className="col-md-12  ">
    <div className="card w-75 mx-auto">
      <div className="card-body">
        <div className="row">
          <div className="col-md-5 border border-1 border-dark rounded-4 ps-4" style={{backgroundColor: 'blue'}}>
            <div className="row text-center">
              <div className="col-md-12">
                <h1 className="fw-bold text-light mt-5">
                  ĐĂNG NHẬP
                </h1>
              </div>
            </div>
            <img className="img-fluid mt-5" src="images/login.png "  />
          </div>
          <div className="col-md-7 ps-5">
            <h1 className="mt-2"> Hello,Again</h1>
            <h5>We are happy to have you back</h5>
            <div className="row me-5">
              <div className="col-md-12 ">
                <h3 className="text-primary fw-bold mt-3 ">Tài khoản</h3>
                <input className="form-control mb-4 mt-3 " placeholder="Email address" type="text" />
                <h3 className="text-primary fw-bold mt-2">Mật khẩu</h3>
                <input className="form-control" placeholder="Password" type="text" />
              </div>
            </div>
            <div className="row me-5">
              <div className="col-md-6 mt-3">
                <div className="form-check">
                  <input className="form-check-input" style={{border: '1px solid blue'}} type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-md-6 mt-3 ">
                <a className="float-end" >Forgot Password ?</a>
              </div>
            </div>
            <div className="row mt-4 me-5">
              <button type="button" className="btn btn-primary">ĐĂNG NHẬP</button>
            </div>
            <div className="row mt-2 me-5">
              <button type="button" className="btn  btn-outline-secondary"><img src="images/icons8-google-36.png"  /> <span className="ps-2"> Đăng nhập với GOOGLE</span></button>
              {/* <div class="col-md-12 text-center">

                      <button type="button" class="btn btn-secondary">Secondary</button>
  
                     </div> */}
            </div>
            <div className="row mt-4 mb-2">
              <h4>Don't have account ? <a className="h5 text-primary" >Sign up</a>
              </h4> 
            </div>
            <div className="row mt-1 me-5">
              <a className="btn  hd text-light fw-bold  " style={{border: '1px solid white'}} >ĐỖI MẬT KHẨU</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login