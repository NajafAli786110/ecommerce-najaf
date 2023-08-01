import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-5">
            <div className="footer-top-data d-flex align-items-center gap-30">
              <img src="../Assets/images/newsletter.png" alt="NewsLetter" />
              <h2 className='mb-0 text-white'>Subscribe For NewsLetter</h2>
            </div>
          </div>
          <div className="col-7"></div>
        </div>
      </div>
    </footer>
    <footer className="py-3"></footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center text-white">&#169; {new Date().getFullYear()}; Powered By <b>ShopGlobalXpress.com</b></p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;