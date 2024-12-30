import React from 'react'

const ChooseAnser = () => {
  return (
  <div className="row hd m-0">
  <div className="row pt-2 text-center">
    <div className="col-md-12 mt-1">
      <img src="images/dongho.png"  />
      <h2 className="text-light mt-3"> </h2>
    </div>
  </div>
  <div className="row mt-2 text-center text-light">
    <div className="col-md-12 mt-2">
      <h2 className="fw-bold">
        MÔN
      </h2>
    </div>
  </div>
  <div className="row mt-5 pb-5 mx-1">
    <div className="col-md-12 mt-1">
      <div className="card w-90 ">
        <div className="card-header">
          <i className="bi bi-star-fill text-warning" />  <span className="fw-bold text-danger">Điểm của bạn sẽ được hiện thị sau khi kết thúc test</span>
        </div>
        <div className="card-body ">
          <div className="row ">
            <div className="col-md-4 text-center">
              <h4 className="text-primary fw-bold">Câu 1</h4>
              <h4 className="text-primary fw-bold mb-4 pt-3" ></h4>
              <img src="images/Subject.png"  />
            </div>
            <div className="col-md-8 d-flex justify-content-center " >
              <div className="ms-5  ">
                <h4 className="text-primary fw-bold mb-5">Hãy chọn đáp án đúng :</h4>
                <div className="form-check fw-bold h4 mb-3" >
                  <input className="form-check-input"  style={{border: '1px solid purple'}} type="radio"  id="flexRadioDefault1" />
                  <label className="form-check-label  ms-2" htmlFor="flexRadioDefault1">
                    
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center mt-4 ">
            <div className="col-md-12">
              <button type="button"  className="btn btn-outline-primary ps-3 fw-bold">ĐẦU TIÊN</button> <button  type="button"  className="btn btn-outline-primary ms-3 fw-bold">LÙI LẠI</button><button type="button"  className="btn btn-outline-primary ms-3 fw-bold">TIẾP THEO</button><button type="button" className="btn btn-outline-primary ms-3 fw-bold" >CUỐI CÙNG</button>
            </div>
          </div>
        </div>
        <div className="card-footer ">
          {/* Button trigger modal */}
          <button type="button" className="btn btn-primary fw-bold"   data-bs-toggle="modal" data-bs-target="#exampleModal">
            Kết thúc sớm
          </button>
          {/* Modal */}
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <img src="images/icons8-grade-35.png"  /> <span className="ms-2 fw-bold">CHÚC BẠN MAY MẮN</span>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <img className="img-fluid" src="images/icons8-tick-144.png"  />
                    </div>
                    <div className="col-md-12 mt-3 text-center">
                      <h3 className="text-success fw-bolder">BẠN ĐÃ HOÀN THÀNH</h3>
                    </div>
                    <div className="col-md-12 mt-5 text-center">
                      <h4 className="text-secondary fw-bolder">ĐÂY LÀ SỐ ĐIỂM CỦA BẠN : <span className="fw-bolder text-danger h3"> </span></h4> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="form-check float-end pt-1">
            <input className="form-check-input h5"  type="checkbox" style={{border: '1px solid blue'}} defaultValue id="flexCheckDefault" />
            <label className="form-check-label h5 pt-1 text-primary fw-bold" htmlFor="flexCheckDefault">
              TÔI THỰC SỰ MUỐN HOÀN THÀNH
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ChooseAnser