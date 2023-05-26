import React, { useEffect, useState } from "react"
function Forgotpassword() {
     const handleCancel = () => {
    // Add cancel logic here
  };
    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Forgot Password</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>    
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
    )
}
export default Forgotpassword;