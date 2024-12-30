import React from 'react'

const Register = () => {
  return (
   <div className="row hd  m-0 ">
  <div className="col-md-12 pt-2 pb-5 ">
    <div className="card  w-75 mx-auto mt-1">
      <div className="card-body">
        <div className="row">
          <div className="col-md-7 lg-7">
            <h2 className="fw-bold mt-3 text-center" style={{color: 'blueviolet'}}>Create new account</h2>
            <div className="row ms-5 me-5 mt-4">
              <div className="col-md-12">
                <h3 className="fw-bold mt-5" style={{color: 'blueviolet'}}>Tài khoản</h3>
                <input className="form-control mt-2 " placeholder="Nhập tài khoản" style={{border: '1px solid blue'}} type="text" />
                <h3 className="fw-bold mt-4" style={{color: 'blueviolet'}}>Gmail</h3>
                <input className="form-control mt-2 " placeholder="Nhập Gmail" style={{border: '1px solid blue'}} type="text" />
                <h3 className="fw-bold mt-4" style={{color: 'blueviolet'}}>Mật khẩu</h3>
                <input className="form-control mt-2 " placeholder="Nhập mật khẩu" style={{border: '1px solid blue'}} type="text" />
                <div className="form-check mt-3">
                  <input className="form-check-input" style={{border: '1px solid blue'}} type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label text-primary fw-bold" htmlFor="flexCheckDefault">
                    Bạn có chấp nhập chính sách không ?
                  </label>
                </div>
                {/* <div class="col-md-12 text-center">
           
           </div> */}
              </div>
            </div>
            <div className="row   ms-5 me-5 mb-5">
              <button type="button" className="btn kkk text-light mt-4">Create new account</button>
            </div>
          </div>
          <div className="col-md-5 kkk lg-5  ">
            <h1 className="text-light fw-bolder text-center mt-2"> Hello World! </h1>
            <div className="row mt-4">
              <div className="col-md-12 text-center">
                <img className="img-fluid" src="images/sign up.png"  />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-12 text-center">
                <a className="btn  kkk text-light fw-bold  " style={{border: '1px solid white'}} href="dangnhap.html">ĐĂNG NHẬP</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Register