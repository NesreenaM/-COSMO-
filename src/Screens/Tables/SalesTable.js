import { useState } from "react";

export default function SalesTable() {
  const [pagination, setPagination] = useState(1);
  const paginationData = [1, 2, 3];
  return (
    <div className="sales-table">
      <table
        style={{
          width: "100%",
          fontSize: "13px",
          color: "#7D7D7D",
          height: "65vh",
          borderTop: "1px solid #EAEAEA"
        }}
      >
        <tr
          style={{ height: "34px", textAlign: "left", background: "#FCFCFC", }}
        >
          <td>ID</td>
          <td>Type</td>
          <td>Title </td>
          <td>Created</td>
          <td>Edited</td>
          <td>Status</td>
          <td>Received Amount</td>
          <td>Total Amount</td>
        </tr>

        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1", }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
        <tr style={{ height: "34px" }}>
          <td style={{ textDecoration: "underLine", color: "#5178D1" }}>
            #5178D1
          </td>
          <td>Regular</td>
          <td>Website</td>
          <td>3/10/21</td>

          <td>3/10/21</td>
          <td>Completed</td>
          <td>150,000.00</td>
          <td>150,000.00</td>
        </tr>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "8px 13px 5px 34px",
          fontSize: "13px",
          background: "#FCFCFC"
        }}
      >
        <div
          style={{
            border: "1px solid #eee",
            display: "flex",
            cursor: "pointer",
          }}
        >
          <div
            onClick={() =>
              setPagination(pagination === 1 ? pagination : pagination - 1)
            }
            style={{
              padding: "5px 10px",
              
              color: `${pagination === 1 ? "#d8cdcd" : ""}`,
            }}
          >
            Prev
          </div>
          {paginationData.map((el) => {
            return (
              <div
                style={{
                  padding: "5px 10px",
                  background: `${el === pagination ? "#418bca" : ""}`,
                }}
                onClick={() => setPagination(el)}
              >
                {el}
              </div>
            );
          })}
          <div
            onClick={() =>
              setPagination(
                pagination === paginationData.length
                  ? pagination
                  : pagination + 1
              )
            }
            style={{
              padding: "5px 10px",
              color: `${pagination === paginationData.length ? "#d8cdcd" : ""}`,
            }}
          >
            Next
          </div>
        </div>

        <div style={{ display: "flex", padding: "5px" }}>
          <div>1-20 of 95 </div>
          <div style={{ padding: "0 3px" }}> Items</div>
        </div>
      </div>
    </div>
  );
}
