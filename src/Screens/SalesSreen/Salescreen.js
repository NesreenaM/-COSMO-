import React from "react";
import SubNavBar from "../../Components/SubNavBar/SubNavBar";
import Tabs from "../../Components/Tabs/Tabs";
import SalesTable from "../Tables/SalesTable";
import DetailedTable from "../Tables/DetailedTable";
import CustomerTable from "../Tables/CustomerTable";
import "./style.css";
export default function Salescreen() {
  return (
    <div className="sale-container">
      <div className="sale-table">
        <SubNavBar />
        <p className="title-section">Sales</p>
        <Tabs tableone={<SalesTable />} tabletwo={<CustomerTable />}  tablethree={<DetailedTable /> } />
      </div>
    </div>
  );
}
