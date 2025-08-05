import React from "react";

const ViewURL = ({ urls }) => {
  return (
    <div>
        <table align="center">
          <tbody>
            <tr>
                <th>S.no</th>
                <th>Short Code</th>
                <th>Original URL</th>
                <th>Expiry Time</th>
            </tr>
            {urls.map((item, index) => (
              <tr key={item.shortCode}>
                <td>{index + 1}</td>
                <td>{item.shortCode}</td>
                <td>{item.url}</td>
                <td>{item.expiryTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default ViewURL;
