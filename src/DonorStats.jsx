var React = require('react');
var Navbar = require('./Navbar.jsx');
var CreateProgram = require('./CreateProgram.jsx');
import {ButtonToolbar, Button} from 'react-bootstrap'
var Dashboard = require('./Dashboard.jsx');
var ReactDOM = require('react-dom');

var tableCellStyle = {
  padding: '30px'
};
var largePic = {
  width: '210px',
  height: '260px'
};



module.exports = React.createClass({

  //
  // loadStatsFromAirtable: function() {
  //   //loadStatsFromAirtable
  // }
  //
  // getInitialState: function() {
  //   return {data: []};
  // },
  //
  // componentDidMount: function() {
  //   this.loadStatsFromAirtable();
  //   setInterval(this.loadStatsFromAirtable, this.props.pollInterval);
  // },


  render: function() {

      return(
        <div className="donorStats">
          <table style={{
            align: 'center',
            margin: '0 auto',
            marginTop: '50px',
            marginBottom: '50px',
          }}>
            <tbody>
              <tr>
                <td style={tableCellStyle}>
                  <img src="/src/assets/Data_Donation_Ave.png" style={largePic} />
                </td>
                <td style={tableCellStyle}>
                  <img src="/src/assets/Data_Donations.png" style={largePic} />
                </td>
                <td style={tableCellStyle}>
                  <img src="/src/assets/Data_Donor.png" style={largePic} />
                </td>
                <td style={tableCellStyle}>
                  <img src="/src/assets/Data_Repeat_Donor.png" style={largePic} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  });
