import "./style.css";
import StyledCheckbox from "../../Components/CheckBox/CheckBox";

export default function PermissionUsersTable() {
  return (
    <div className="Permission-table">
      <table
        style={{
          width: "100%",
        }}
      >
        <tr style={{ height: "34px" }}>
          <th>Name</th>
          <th>Veiw</th>
          <th>Edit</th>
          <th>Create</th>
          <th>Delete</th>
        </tr>

        <tr>
          <td style={{ paddingLeft:"40px"}} >Accounting - Purchase</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}} >Sales Order</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Invoice</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Payment</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Credit Note</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr style={{ background: "#F5F5F5" }}>
          <td style={{ paddingLeft:"40px"}} >Accounting - Sales</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Purchase Order</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Payment</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Bill</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Debit Note</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>

        <tr style={{ background: "#F5F5F5" }}>
          <td style={{ paddingLeft:"40px"}} >Accounting - Others</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Journal Entry</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>General Ledger</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Cash & Bank Accounts</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Taxes </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>

        <tr style={{ background: "#F5F5F5" }}>
          <td style={{ paddingLeft:"40px"}} >Accounting - Statements</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}> Balance Sheet</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Trial Balance</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Cash Flow</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
        <tr>
          <td style={{ paddingLeft:"64px"}}>Profit & Loss</td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
          <td>
            <StyledCheckbox />
          </td>
        </tr>
      </table>
    </div>
  );
}
