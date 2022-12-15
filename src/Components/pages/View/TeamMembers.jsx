import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../../redux/actions/userActions";
import { getTranscationDetail } from "../../../redux/actions/transcationActions";
import Anjan from "../../assets/img/Teams/anjan.jpg"
import Aseem from "../../assets/img/Teams/aseem_org.jpg"
import Rojan from "../../assets/img/Teams/rojan.jpg"
import Suyog from "../../assets/img/Teams/suyog.jpg"
import Roj from "../../assets/img/Teams/roj.jpg"
import NoImage from "../../assets/img/Teams/no_image.png"

const TeamMembers = () => {
  const [data, setData] = useState();
  const username = localStorage.getItem("userName");

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllUser()).then((res) => {
    //   if (res?.status === 200) {
    //     setData(res?.data);
    //   } else {
    //   }
    // });
  }, []);



  return (
    <div className="container mt-4">
<h3 className="text-center mb-4"><b>Welcome to InstantSaving27</b></h3>
      <div className="d-flex row align-items-center">
        {/* Details */}
      <div className="col-sm-6 col-lg-4">
          <div class="card m-3" >
            <img src={Anjan} class="card-img-top" alt="..." height={'300vh'}/>
            <div class="card-body">
              <h6 className="p-0 m-0 mb-2">Description</h6>
              <div className="row">
                <div className="col fw-bold">Name:</div>
                <div className="col">Anjan Maharjan</div>
              </div>
              <div className="row">
                <div className="col fw-bold">Contact:</div>
                <div className="col">9861566468</div>
              </div>
              <div className="row">
                <div className="col fw-bold">Email:</div>
                <div className="col">-</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div class="card m-3">
            <img src={Aseem} class="card-img-top" alt="..." height={'300vh'}/>
            <div class="card-body">
              <h6 className="p-0 m-0 mb-2">Description</h6>
              <div className="row">
                <div className="col fw-bold">Name:</div>
                <div className="col">Aseem Maharjan</div>
              </div>
              <div className="row">
                <div className="col fw-bold">Contact:</div>
                <div className="col">9849029127</div>
              </div>
              <div className="row">
                <div className="col fw-bold">Email:</div>
                <div className="col">-</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div class="card m-3">
            <img src={Roj} class="card-img-top" alt="..." height={'300vh'}/>
            <div class="card-body">
              <h6 className="p-0 m-0 mb-2">Description</h6>
              <div className="row">
                <div className="col fw-bold">Name:</div>
                <div className="col">Roj Maharjan</div>
              </div>
              <div className="row">
                <div className="col fw-bold">Contact:</div>
                <div className="col">9869254678</div>
              </div>
              <div className="row">
                <div className="col fw-bold">Email:</div>
                <div className="col">-</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 ">
          <div class="card m-3">
            <img src={Rojan} class="card-img-top" alt="..." height={'300vh'}/>
            <div class="card-body">
              <h6 className="p-0 m-0 mb-2">Description</h6>
              <div className="row">
                <div className="col fw-bold">Name:</div>
                <div className="col">Rojan Maharjan</div>
              </div>
              <div className="row">
                <div className="col fw-bold">Contact:</div>
                <div className="col">9840875994</div>
              </div>
              <div className="row">
                <div className="col fw-bold">Email:</div>
                <div className="col">-</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 ">
          <div class="card m-3">
            <img src={Suyog} class="card-img-top" alt="..." height={'300vh'}/>
            <div class="card-body">
              <h6 className="p-0 m-0 mb-2">Description</h6>
              <div className="row">
                <div className="col fw-bold">Name:</div>
                <div className="col">Suyog Maharjan</div>
              </div>
              <div className="row">
                <div className="col fw-bold">Contact:</div>
                <div className="col">9880195874</div>
              </div>
              <div className="row">
                <div className="col fw-bold">Email:</div>
                <div className="col">-</div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default TeamMembers;


        {/* {data?.map((o,i) => {
          return <div className="col-sm-6 col-lg-4">
          <div class="card">
            <img src={``} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{o?.name}</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        })} */}