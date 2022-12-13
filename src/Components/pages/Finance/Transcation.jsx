import React, {useState} from "react";
import {SelectInput} from "../../shared/common/form";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {createTranscation} from "../../../redux/actions/transcationActions"
import { getUserDetail, getAllUser } from "../../../redux/actions/userActions";
import {connect} from "react-redux"
import { useEffect } from "react";


const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Payment =[
  {
    name:"Cash",
    value:"Cash"
  },
  {
    name:"Cashless",
    value:"Cashless"
  }
]


const Transcation = (props) => {
  const initState = {
    data: {
      team_member: "",
      amount: "",
      payment:"",
      message:"",
      loan:""
    },
    error: {},
  };

  const date = Date().toLocaleString();

  const [state, setState] = useState({ ...initState });
  const [Members, setMember] = useState();
  const username = localStorage.getItem('userName')
  
  const dispatch = useDispatch();

  const d = new Date();

  const onChange = (e) => {
    const { target } = e;
    const { name, type } = target;
    let data = { ...state.data };
    let error = { ...state.error };
    const value =
      type === "checkbox" ? (target.checked === true ? 1 : 0) : target.value;
    data[name] = value;
    setState({ ...state, data, error });
  };

  useEffect(() => {
    dispatch(getUserDetail(username))
    dispatch(getAllUser()).then((res) => {
      if(res?.status === 200){
        setMember(res?.data?.map(x => {return {'name':x.name, 'value':x.name}}))
      }
    })
  },[])

  const onSubmit = () => {
    setState({ ...state, processing: true });

    let temp = { ...state.data };
    dispatch(createTranscation(temp)).then((res) => {
      if (res.status === 200) {
        // dispatch(successAlert(res?.data.message));
        props.history.push("/team-portfolio");
        setState({ ...state, data:{}, processing: false });
      } 
      else if(res.status === 422){
        setState({ ...state, error: res?.data, processing: false });
      }
      else{
        setState({ ...state, error: res?.data, processing: false });
      }
    });
  };

  //setState({ ...state, error: res?.data, processing: false });


let {error, data} = state

  return (
    <div className="container mt-4">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-title text-center p-3 pb-0 mb-0">
              <h4>Team Transcation of the month {monthNames[d.getMonth()]}</h4>
              <p className="m-0 p-0">
                <small className="text-muted fw-bold">{date}</small>
              </p>
            </div>
            <hr />
            <div className="card-body pt-0 mt-0">
              <div className="form">
                  <div className="mb-3">
                  <SelectInput
                    label="Team Member"
                    name="team_member"
                    value={data?.team_member}
                    // hideChoice={true}
                    error={error?.team_member}
                    options={Members}
                    onChange={(e) => onChange(e)}
                    required
                    // disabled={disableFields}
                  />
                  </div>
                {/* <div className="mb-3">
                  <label
                    for=""
                    className="form-label fw-bold"
                  >
                    Team Members:
                  </label>
                  <select className="form-control" name="cars" id="cars">
                    <option value="">Choose member</option>
                    <option value="Anjan maharjan">Anjan maharjan</option>
                    <option value="Aseem Maharjan">Aseem Maharjan</option>
                    <option value="Rakesh Shrestha">Rakesh Shrestha</option>
                    <option value="Roj Maharjan">Roj Maharjan</option>
                    <option value="Rojan Maharjan">Rojan Maharjan</option>
                    <option value="Suyog Maharjan">Suyog Maharjan</option>
                  </select>
        
                </div> */}
                 <div className="mb-3">
                 <SelectInput
                    label="Payment"
                    name="payment"
                    value={data?.payment}
                    // hideChoice={true}
                    error={error?.payment}
                    options={Payment}
                    onChange={(e) => onChange(e)}
                    required
                    // disabled={disableFields}
                  />
                 </div>
                <div class="mb-3">
                  <label class="form-label fw-bold">Amount</label>
                  <input type="number" className={`form-control ${error?.amount ? 'is-invalid' : ''}`} name="amount"  onChange={(e) => onChange(e)} />
                  {error?.amount ?
                  <small className="text-danger">{error?.amount}</small> : null}
                </div>

                <div class="mb-3">
                  <label class="form-label fw-bold">Loan Amount</label>
                  <input type="number" className={`form-control ${error?.loan ? 'is-invalid' : ''}`} name="loan"  onChange={(e) => onChange(e)} />
                  {error?.loan ?
                  <small className="text-danger">{error?.loan}</small> : null}
                </div>

                <div class="mb-3">
                    <label for="msg" className="fw-bold">
                      Comments/message:
                    </label>
                    <textarea
                      class="form-control"
                      id="msg"
                      name="message"
                      rows="3"  onChange={(e) => onChange(e)}
                    ></textarea>
                </div>
                <div className="text-center">
                <button type="submit" class="btn btn-primary" onClick={() => onSubmit()}>
                  Submit
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcation;

// const mapStateToProps = state => ({
//   number: state.number,
//   errors: state.errors
// });
// export default connect(mapStateToProps, { createTranscation })(Transcation);