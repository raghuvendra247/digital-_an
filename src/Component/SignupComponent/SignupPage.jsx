import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupPage = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="row w-100 justify-content-center align-items-center gx-2"> {/* gx-2 = smaller horizontal gap */}
        
        {/* Left Side with Image */}
        <div className="col-md-5 d-flex justify-content-end">
          <img
            src="/assets/ctwa-2.png"
            alt="WhatsApp Illustration"
            className="img-fluid"
            style={{ maxWidth: '550px' }}
          />
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="col-md-5">
          <div className="bg-white p-5 rounded shadow" style={{ maxWidth: '550px' }}>
            <h4 className="text-center fw-bold mb-4">SIGN UP WITH EMAIL</h4>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control form-control-lg" placeholder="Work Email" />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control form-control-lg" placeholder="First Name" />
                </div>
                <div className="col">
                  <input type="text" className="form-control form-control-lg" placeholder="Last Name" />
                </div>
              </div>
              <button type="submit" className="btn btn-success btn-lg w-100">Next Step</button>
              <div className="text-center mt-3">
                <small>Existing User? <a href="#">Login here</a></small>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;
