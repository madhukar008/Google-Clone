import React from 'react'
import "./Content.css";
import "bootstrap/dist/css/bootstrap.min.css"

const Content = () => {
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://phuongnamvina.com/img_data/images/e-commerce-la-gi-kien-thuc-can-biet-ve-ecommerce.jpeg" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://phuongnamvina.com/img_data/images/e-commerce-la-gi-kien-thuc-can-biet-ve-ecommerce.jpeg" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://phuongnamvina.com/img_data/images/e-commerce-la-gi-kien-thuc-can-biet-ve-ecommerce.jpeg" className="d-block w-100" alt=""/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Content