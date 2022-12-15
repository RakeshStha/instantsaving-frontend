import React, { useState, useEffect } from "react";
import Tables from "../../shared/common/Table";
import {
  getTranscationDetail,
  deleteTranscation,
  getSearchMembers,
} from "../../../redux/actions/transcationActions";
import { useDispatch } from "react-redux";
import { getAllUser } from "../../../redux/actions/userActions";
import { SelectInput } from "../../shared/common/form";
import Loader from "../../shared/loader/Loader";
import { getUserDetail } from "../../../redux/actions/userActions";

const TeamPortfolio = () => {
  const [data, setData] = useState();
  const [Members, setMember] = useState();
  const [searchMember, setSearchMember] = useState();
  const [loading, setLoading] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const username = localStorage.getItem("userName");
  const [Type, setType] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = (id) => {
    dispatch(deleteTranscation(id)).then((res) => {
      if (res?.status === 200) {
        fetchData();
      } else {
        alert("Error");
      }
    });
  };

  const fetchData = () => {
    setLoading(true);
    dispatch(getTranscationDetail()).then((res) => {
      if (res?.status === 200) {
        setData(res?.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    if (searchMember) {
      setLoading(true);
      dispatch(getSearchMembers(searchMember)).then((res) => {
        if (res?.status === 200) {
          setData(res?.data?.data);
          setLoading(false);
        } else {
          alert("Error");
          setLoading(false);
        }
      });
    }
  }, [searchMember, showSearch]);

  const searchData = () => {
    if (showSearch) {
      setShowSearch(false);
      setSearchMember("");
      fetchData();
    } else {
      setShowSearch(true);
      dispatch(getAllUser()).then((res) => {
        if (res?.status === 200) {
          setMember(
            res?.data?.map((x) => {
              return { name: x.name, value: x.name };
            })
          );
        }
      });
    }
  };

  useEffect(() => {
    if(username){
     dispatch(getUserDetail(username)).then((res) => {
       if (res?.status === 200) {
         setType(res?.data?.type);
       } else {
       }
     });
    }
   }, []);

  const columns = [
    { name: "SN", alignment: "" },
    { name: "Name", alignment: "" },
    { name: "Amount", alignment: "" },
    { name: "Payment Type", alignment: "" },
    { name: "Loan Amount", alignment: "" },
    { name: "Message", alignment: "" },
    { name: "Created At", alignment: "" },
    { name: "Action", alignment: "" },
  ];

  const display_table = (
    <>
      {data?.length > 0 ? (
        data?.map((o, i) => {
          return (
            <tr>
              <td data-label="SN">{i + 1}</td>
              <td data-label="name">{o?.team_member}</td>
              <td data-label="amount">{o?.amount}</td>
              <td data-label="payment">{o?.payment}</td>
              <td data-label="loan">{o?.loan ? o?.loan : " - "}</td>
              <td data-label="message">{o?.message ? o?.message : " - "}</td>
              <td data-label="created">{o?.created_date?.slice(0, 10)}</td>
              {Type === 'admin' ? 
              <td data-label="delete">
              <i
                class="fa fa-trash text-danger"
                aria-hidden="true"
                onClick={() => deleteItem(o?._id)}
              ></i>
            </td>
             : <td>-</td>}
            </tr>
          );
        })
      ) : (
        <tr className={"text-center"}>
          <td colSpan="8">No Records</td>
        </tr>
      )}
       <tr style={{backgroundColor: "#a9f3d0"}}>
        <td colspan="4" className="fw-bold">Total Amount</td>
        <td colspan="4" className="fw-bold">{data?.map(x => parseInt(x.amount)).reduce((a, b) => a + b)}</td>
      </tr>
    </>
  );

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="mb-3">Team Savings</h3>
        <div className="d-flex align-items-center my-3">
          {showSearch ? (
            <SelectInput
              className={""}
              disableLabel={true}
              name="team_member"
              value={searchMember}
              options={Members}
              onChange={(e) => setSearchMember(e.target.value)}
              required
            />
          ) : null}
          <button
            style={{ marginLeft: "10px" }}
            className={`btn ${showSearch ? "btn-danger" : "btn-primary"}`}
            onClick={() => searchData()}
          >
            {showSearch ? (
              <span>X</span>
            ) : (
              <span>
                <i
                  class="fa fa-magnifying-glass"
                  style={{ fontSize: "18px" }}
                ></i>{" "}
                Search...
              </span>
            )}
          </button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Tables
          ID={"team_portfolio"}
          columns={columns}
          display_table={display_table}
        />
      )}
    </div>
  );
};

export default TeamPortfolio;
