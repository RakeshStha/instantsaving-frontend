import React from "react";

const Rules = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">
        Rules and Regulation for InstantSaving27 members
      </h2>
      <div className="rules pt-3">
      <h5 className="my-3">Transcational Information</h5>
        <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Interest Rate</div>
            </div>
            <span class="badge bg-primary rounded-pill">12%</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Loan Processing</div>
              For each members loan amount will be the Total Members Number/Total Members Saving Amount.
            </div>
            {/* <span class="badge bg-primary rounded-pill">12%</span> */}
          </li>
        </ol>
        <h5 className="my-3">InstantSaving Directorial</h5>
        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Leader</div>
              As per the discussion on 2079-08-03, we have consider that per
              member in a group must be leader for 6th month. Here they must
              manage all the activities i.e. saving, collecting and loan
              processing of certain amount from all the members
            </div>
            {/* <span class="badge bg-primary rounded-pill">14</span> */}
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Manager</div>
              Suyog Maharjan, Roj Maharjan
            </div>
            {/* <span class="badge bg-primary rounded-pill">14</span> */}
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Emergency Support</div>
              Suyog maharjan, Rojan Maharjan, Aseem maharjan
            </div>
            {/* <span class="badge bg-primary rounded-pill">14</span> */}
          </li>
        </ol>
      </div>
      <h3 className="text-center my-4">Thank You</h3>
    </div>
  );
};

export default Rules;
