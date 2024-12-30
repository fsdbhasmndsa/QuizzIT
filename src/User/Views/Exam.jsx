import React from 'react'

const Exam = () => {
  return (
    <div class="row m-0 hd"><article className="col-md-9" style={{borderRight: '1px solid white'}}>
    <div className="row mt-2">
      <div className="col-md-12">
        <h1 className="fw-bold text-center text-light mt-3">
          DANH SÁCH  CÁC MÔN HỌC
        </h1>
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-md-4 gaygay" >
        <div className="card text-center">
         
          <div className="card-body">
            <img className="img-fluid" src="images/CLCO.jpg" alt />
            <a  className="btn btn-primary d-block ">Vào xem</a>
          </div>
          
        </div>
      </div>

      <div className="col-md-4 gaygay" >
        <div className="card text-center">
         
          <div className="card-body">
            <img className="img-fluid" src="images/CLCO.jpg" alt />
            <a  className="btn btn-primary d-block ">Vào xem</a>
          </div>
          
        </div>
      </div>

      <div className="col-md-4 gaygay" >
        <div className="card text-center">
         
          <div className="card-body">
            <img className="img-fluid" src="images/CLCO.jpg" alt />
            <a  className="btn btn-primary d-block ">Vào xem</a>
          </div>
          
        </div>
      </div>


      <div className="col-md-4 gaygay" >
        <div className="card text-center">
         
          <div className="card-body">
            <img className="img-fluid" src="images/CLCO.jpg" alt />
            <a  className="btn btn-primary d-block ">Vào xem</a>
          </div>
          
        </div>
      </div>


      <div className="col-md-4 gaygay" >
        <div className="card text-center">
         
          <div className="card-body">
            <img className="img-fluid" src="images/CLCO.jpg" alt />
            <a  className="btn btn-primary d-block ">Vào xem</a>
          </div>
          
        </div>
      </div>


      <div className="col-md-4 gaygay" >
        <div className="card text-center">
         
          <div className="card-body">
            <img className="img-fluid" src="images/CLCO.jpg" alt />
            <a  className="btn btn-primary d-block ">Vào xem</a>
          </div>
          
        </div>
      </div>
    </div>
    <div className="row mt-3 mb-3">
      <div className="col-md-12 text-center">
        <button type="button"  className="btn btn-danger fw-bold" style={{minWidth: 200}}>LÙI LẠI</button>
        <button type="button" className="btn btn-danger fw-bold ms-4"   style={{minWidth: 200}}>TIẾP THEO</button>
      </div>
    </div>
  </article>
  <aside className="col-md-3">
    <div className="row mb-3">
      <div className="col-md-12 mt-4">
        <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed text-primary fw-bold" type="button" style={{border: '1px solid blue'}} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <i className="bi bi-bing fs-4 " />  <span className="ps-3">NGÀNH LẬP TRÌNH</span>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion">
                <ul className="list-group  p-0 ">
                  <li  className="list-group-item "> <i className="bi bi-star-fill text-warning" />  <span className="fw-bold ms-3"><a  style={{textDecoration: 'none'}}></a></span> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-3">
      <div className="col-md-12 mt-4">
        <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed text-primary fw-bold" type="button" style={{border: '1px solid blue'}} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne">
                <i className="bi bi-image-fill fs-4" />   <span className="ps-3">CƠ SỞ DỮ LIỆU</span> 
              </button>
            </h2>
            <div id="flush-collapseOne1" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
              <div className="accordion">
                <ul className="list-group  p-0 ">
                <li  className="list-group-item "> <i className="bi bi-star-fill text-warning" />  <span className="fw-bold ms-3"><a  style={{textDecoration: 'none'}}></a></span> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-3">
      <div className="col-md-12 mt-4">
        <div className="accordion accordion-flush mt-2" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed text-primary fw-bold" type="button" style={{border: '1px solid blue'}} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne">
              <i className="bi bi-browser-chrome fs-4" />    <span className="ps-3">  PHÁT TRIỂN WEBSITE</span>
              </button>
            </h2>
            <div id="flush-collapseOne1" className="accordion-collapse collapse " data-bs-parent="#accordionFlushExample">
              <div className="accordion">
                <ul className="list-group  p-0 ">
                <li  className="list-group-item "> <i className="bi bi-star-fill text-warning" />  <span className="fw-bold ms-3"><a  style={{textDecoration: 'none'}}></a></span> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </aside>
</div>

  )
}

export default Exam
