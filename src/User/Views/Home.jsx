import React from 'react'

const Home = () => {
  return (
    <div id="gay1" className="section hd m-0 ">
  <div className="row mb-5 ">
  <div className="col-12 col-md-6 ps-5 pt-5 mb-3 mt-5">
  <h1 className="fw-bolder text-light ddd " style={{ fontSize: 50, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>  Kiểm tra trực tuyến mạnh mẽ
    và người tạo câu đố</h1>
  <h4 className="pt-3 fw-bold text-light " >Tạo, gửi và phân tích các bài kiểm tra của bạn,<br /> câu đố và đánh giá miễn phí với
    <br /> FlexiQuiz</h4>
  <button type="button" className="btn btn-outline-primary mb-5 mt-4 btn-lg fw-bold">Dùng miễn phí</button>
</div>

    <div className="col-12 col-md-6 mb-2 mt-5   ">
      <img className="img-fluid mt-5" src="images/18824957.jpg" alt />
    </div>
  </div>
  {/* <div class="mb-5" style="height: 60px;">
  
    </div> */}
  <div className="row  mb-4 mt-5">
    <div className="col-md-6 mt-5 text-center " style={{borderRight: '1px solid white'}}>
      <h2 className="text-light fw-bold mt-2"> <span className="nonn">AI LÀ</span> <span style={{color: 'rgb(4, 245, 77)'}}>NGƯỜI SỬ DỤNG</span></h2>
      <h5 className="text-light fw-bold mt-3 mb-3">Người sử dụng có thể là các học sinh , giáo viên , các doanh nghiệp</h5>
      <div className="row pt-5 me-4">
        <div className="col-md-4">
          <img className="img-fluid mb-4 ms-5" src="images/individuals.svg" alt />
        </div>
        <div className="col-md-4">
          <img className="img-fluid mb-4 ms-5" src="images/businesses.svg" alt />
        </div>
        <div className="col-md-4 ">
          <img className="img-fluid mb-4 ms-5" src="images/teachers.svg" alt />
        </div>
        <div className="col-md-12 mt-5">
          <h3 className="fw-bold text-light mt-3">
            Tạo các câu đố xã hội thú vị mà bạn có thể đăng trên trang web, blog hoặc trang truyền thông xã hội khác của mình
          </h3>
        </div>
      </div>
    </div>
    <div className="col-md-6 text-center mt-5 ">
      <h2 className="text-light fw-bold mt-2 "> <span className="non">BẠN CÓ THỂ TẢI </span> <span style={{color: 'red'}}>ỨNG DỤNG</span></h2>
      <h5 className="text-light fw-bold mt-3 ">Việc tải về máy sẽ giúp bạn thuận tiện hơn bạn có thể tải dưới đây </h5>
      <div className="row mt-5 me-2 ms-2">
        <div className="col-md-6 pt-5">
          <div className="card text-center">
            <div className="card-body">
              <img className="img-fluid ps-3 mx-auto w-25 my-4" src="images/icon2.png" alt />
              <h5 className="fw-bold text-primary pt-4">  MAC OS 10 , MAC OS 11 </h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5 ">
          <div className="card text-center">
            <div className="card-body">
              <img className="img-fluid ps-3 mx-auto w-25 my-4" src="images/icon1.png" alt />
              <h5 className="fw-bold text-primary pt-4">  Windown 10 , Windown 11 </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row text-center mt-5">
    <h1 className="fw-bolder text-light mt-5"> CÁC TÍNH NĂNG TUYỆT VỜI</h1>
  </div>
  <div className="row mt-5 " style={{margin: 0}}>
    <div className="col-md-4 dd d-flex align-items-stretch">
      <div className="card text-center ">
        <div className="card-body">
          <img src="images/access-anywhere.svg" alt />
          <h4 className="card-title mt-4 fw-bold text-success">Truy cập mọi nơi</h4>
          <p className="card-text mb-4">Việc trực tuyến <strong className="text-success">cho phép</strong> bạn và người trả lời truy cập, quản lý và thực hiện các câu hỏi của bạn từ mọi nơi, mọi lúc.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 dd d-flex align-items-stretch">
      <div className="card text-center">
        <div className="card-body">
          <img src="images/auto-grading.svg" alt />
          <h4 className="card-title mt-3 fw-bold text-danger">Tự động chấm điểm</h4>
          <p className="card-text mb-4">FlexiQuiz có thể <span className="text-danger fw-bold">tự động</span> đánh dấu và chấm điểm các bài đánh giá của bạn, giúp bạn tiết kiệm thời gian tập trung vào những gì quan trọng.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 dd d-flex align-items-stretch">
      <div className="card text-center">
        <div className="card-body">
          <img src="images/secured.svg" alt />
          <h4 className="card-title mt-3 fw-bold text-primary">Được bảo mật bằng SSL</h4>
          <p className="card-text  pb-4">Với mã hóa SSL và sử dụng cơ sở hạ tầng <span className="text-primary fw-bold">đám mây</span> tiên tiến của chúng tôi, bạn có thể chắc chắn rằng các bài kiểm tra của mình sẽ luôn được bảo mật.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-5 " style={{margin: 0}}>
    <div className="col-md-4 dd d-flex align-items-stretch">
      <div className="card text-center ">
        <div className="card-body">
          <img src="images/custom-branding.svg" alt />
          <h4 className="card-title mt-4 fw-bold text-info">tùy chỉnh</h4>
          <p className="card-text mb-4">Việc trực tuyến <strong className="text-info">cho phép</strong> bạn và người trả lời truy cập, quản lý và thực hiện các câu hỏi của bạn từ mọi nơi, mọi lúc.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 dd d-flex align-items-stretch">
      <div className="card text-center">
        <div className="card-body">
          <img src="images/timed-tests.svg" alt />
          <h4 className="card-title mt-3 fw-bold text-warning">Kiểm tra tính giờ</h4>
          <p className="card-text mb-4">bạn có thể dễ dàng đặt <span className="fw-bold text-warning"> giới hạn thời gian</span> hoặc cho phép người học của bạn có thời gian không giới hạn để hoàn thành bài đánh giá của mình.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 dd d-flex align-items-stretch">
      <div className="card text-center">
        <div className="card-body">
          <img className="pb-4" src="images/public-private.svg" alt />
          <h4 className="card-title mt-4 fw-bold text-primary">công khai và riêng tư</h4>
          <p className="card-text pb-4">Với mã hóa SSL và sử dụng cơ sở hạ tầng đám mây tiên tiến của chúng tôi, bạn có thể <span className="fw-bold text-primary">chắc chắn</span> rằng các bài kiểm tra của mình sẽ luôn được bảo mật.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col-md-12">
      <h1 className="text-light fw-bold text-center mt-5 non">  
        FlexiQuiz là một công cụ  kiểm tra trực tuyến 
      </h1><h5 className="text-light fw-bold text-center mt-2">  
        bài kiểm tra và đánh giá trực tuyến của riêng bạn với FlexiQuiz miễn phí</h5>
    </div>
  </div>
  <div className="row mt-4 mb-4">
    <div className="col-md-8 text-center">
      <img className="img-fluid" src="images/kkk-preview.png" alt />
    </div>
    <div className="col-md-4 text-center mt-3">
      <h3 className="text-light fw-bold  mt-2 pe-2">Team Flash is a professional esports <br />   and Arena of Valor, Free Fire, and League of Legends teams competing in Vietnam.</h3>
      <button className="btn btn-outline-info fw-bold btn-lg mt-5 text-light mb-4" type="submit">Dùng miễn phí</button>
    </div>
  </div>
</div>

  )
}

export default Home