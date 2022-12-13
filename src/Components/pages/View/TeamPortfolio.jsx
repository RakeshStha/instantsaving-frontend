import React, { useState, useEffect } from "react";
import Tables from "../../shared/common/Table";
import {
  getTranscationDetail,
  deleteTranscation,
  getSearchMembers,
} from "../../../redux/actions/transcationActions";
import { useDispatch } from "react-redux";
import {getAllUser} from "../../../redux/actions/userActions"
import { SelectInput } from "../../shared/common/form";

const TeamPortfolio = () => {
  const [data, setData] = useState();
  const [Members, setMember] = useState();
  const [searchMember, setSearchMember] = useState();
  const [showSearch, setShowSearch] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData()
  }, []);

  const deleteItem = (id) => {
    dispatch(deleteTranscation(id)).then((res) => {
      if (res?.status === 200) {
        fetchData()
      } else {
        alert("Error");
      }
    });
  };

  const fetchData = () => {
    dispatch(getTranscationDetail()).then((res) => {
      if (res?.status === 200) {
        setData(res?.data);
      } else {
      }
    });
  }

  useEffect(() => {
  if(searchMember) dispatch(getSearchMembers(searchMember)).then((res) => {
    if (res?.status === 200) {
    setData(res?.data?.data)
    } else {
      alert("Error");
    }})
  }, [searchMember, showSearch])

  const searchData = () => {
   if(showSearch) {
    setShowSearch(false)
    setSearchMember('')
    fetchData()
   }
   else{
    setShowSearch(true)
    dispatch(getAllUser()).then((res) => {
      if(res?.status === 200){
        setMember(res?.data?.map(x => {return {'name':x.name, 'value':x.name}}))
      }
    })
   }
  }

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

  const display_table = data?.length > 0 ? data?.map((o, i) => {
    return<tr>
        <td data-label="SN">{i + 1}</td>
        <td data-label="name">{o?.team_member}</td>
        <td data-label="amount">{o?.amount}</td>
        <td data-label="payment">{o?.payment}</td>
        <td data-label="loan">{o?.loan}</td>
        <td data-label="message">{o?.message}</td>
        <td data-label="created">{o?.created_date?.slice(0, 10)}</td>
        <td data-label="delete">
          <i
            class="fa fa-trash text-danger"
            aria-hidden="true"
            onClick={() => deleteItem(o?._id)}
          ></i>
        </td>
      </tr>
 }) :   <tr className={"text-center"}>
  <td colSpan="8">No Records</td>
</tr> 

  return (
    <div className="container mt-4">
       <div className="d-flex align-items-center justify-content-between">
       <h3 className="mb-3">Team Savings</h3>
      <div className="d-flex align-items-center my-3">
        {showSearch ? 
        <SelectInput
        className={""}
        disableLabel={true}
          name="team_member"
          value={searchMember}
          options={Members}
          onChange={(e) => setSearchMember(e.target.value)}
          required
        />
      : null}
       <button style={{marginLeft: "10px"}} className={`btn ${showSearch ? 'btn-danger' :'btn-primary'}`} onClick={() => searchData()}> 
       { showSearch ? <span>X</span>
        : <span><i class="fa fa-magnifying-glass" style={{fontSize:"18px"}}></i> Search...</span>}
        </button>
      </div>
       </div>
      <Tables
        ID={"team_portfolio"}
        columns={columns}
        display_table={display_table}
      />
    </div>
  );
};

export default TeamPortfolio;
