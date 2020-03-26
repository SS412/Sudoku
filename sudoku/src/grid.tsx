import React from 'react';
import './App.css';
import Cell from './cell';

function Grid() {
  return (
    <div>
      <table>
        <tbody>
            {
                
            }
          <tr>
             <td>
              <Cell />
             </td>
             <td>
              <Cell />
             </td>
             <td>
              <Cell />
             </td>
             <td>
              <Cell />
             </td>
             <td>
              <Cell />
             </td>
             <td>
              <Cell />
             </td>
             <td>
              <Cell />
             </td>
             <td>
              <Cell />
             </td>
             <td>
              <Cell />
             </td>
             
          </tr>
        </tbody>
      </table>
     </div>
  );
}

export default Grid;