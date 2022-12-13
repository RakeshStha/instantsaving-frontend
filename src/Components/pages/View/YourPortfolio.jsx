import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Tables from "../../shared/common/Table";
import { getUserDetail } from "../../../redux/actions/userActions";
import { getTranscationDetail } from "../../../redux/actions/transcationActions";

const YourPortfolio = () => {
  const [data, setData] = useState();
  const username = localStorage.getItem("userName");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetail(username)).then((res) => {
      if (res?.status === 200) {
        setName(res?.data?.name);
      } else {
      }
    });
  }, []);

  useEffect(() => {
    if (name)
      dispatch(getTranscationDetail()).then((res) => {
        if (res?.status === 200) {
          setData(res?.data?.filter((x) => x.team_member === name));
        } else {
        }
      });
  }, [name]);

  const columns = [
    { name: "SN", alignment: "" },
    { name: "Name", alignment: "" },
    { name: "Amount", alignment: "" },
    { name: "Loan", alignment: "" },
    { name: "Payment Type", alignment: "" },
    { name: "Message", alignment: "" },
    { name: "Created At", alignment: "" },
  ];

  const display_table =
    data?.length > 0 ? (
      data?.map((o, i) => {
        return (
          <tr>
            <td data-label="SN">{i + 1}</td>
            <td data-label="name">{o?.team_member}</td>
            <td data-label="amount">{o?.amount}</td>
            <td data-label="payment">{o?.payment}</td>
            <td data-label="loan">{o?.loan}</td>
            <td data-label="message">{o?.message}</td>
            <td data-label="created">{o?.created_date?.slice(0, 10)}</td>
          </tr>
        );
      })
    ) : (
      <tr className={"text-center"}>
        <td colSpan="7">No Records</td>
      </tr>
    );

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Your Savings</h3>
      <Tables columns={columns} display_table={display_table} />
    </div>
  );
};

export default YourPortfolio;
