import React, { useState } from "react";

function PayPage() {
  const [details, setDetails] = useState({
    phone: "",
    amount: "",
  });

  return (
    <div className="card p-4 mb-3">
      <p className="text fs-4 fw-normal text-center font-monospace">
        Give It A Try
      </p>
      <form>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount:</label>
          <input type="number" className="form-control" />
        </div>

        <button type="submit" className="btn btn-block btn-primary col-12">
          PAY
        </button>
      </form>
      <div className="mt-3">
        <p className="text fs-4 fw-normal">Need Help?</p>
        <p className="text fs-5 fw-light">Reach Out: 0768793923</p>
        <p className="text fs-5 fw-normal">
          GitHub Repo:{" "}
          <a
            href="https://github.com/hamisirizwan/react-mpesa"
            style={{ textDecoration: "none" }}
          >
            get code
          </a>
        </p>
      </div>
    </div>
  );
}

export default PayPage;
