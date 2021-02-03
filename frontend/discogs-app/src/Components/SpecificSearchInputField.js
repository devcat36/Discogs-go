import React from "react";
import {Input} from "semantic-ui-react";

function SpecificSearchInputField({label}) {
  return (
    <tr>
      <td style={{textAlign: 'right'}}><span>{label}</span></td>
      <td style={{padding: '5px'}}><Input fluid style={{height: '2.2rem', maxWidth: '300px', minWidth:'190px'}}/></td>
    </tr>
  );
}

export default SpecificSearchInputField;