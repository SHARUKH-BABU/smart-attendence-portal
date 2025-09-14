import React from 'react'

const Footer = () => {
  let serialNumber = 1;
  let conductedBy = "John Doe";
  let time = "9:00 AM";
  let status = "Present";
  let mode = "Online";
  let reportIssue = "No Issues";
  let userReport = Array(15).fill({serialNumber, conductedBy, time, status, mode, reportIssue}); // many rows

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.7)] h-2/5 flex flex-col ">
        
        {/* Header */}
        <div className="flex p-2 border-b-2">
          <p className="text-blue-600 text-xl font-bold">
            Today's Attendances
          </p>
        </div>

        {/* Centered Scrollable Table */}
        <div className="flex justify-center flex-grow overflow-y-auto p-4">
          <div className="w-[90%] border-gray-500 rounded-lg shadow-md">
            <table className="w-full text-left">
              <thead className="bg-gray-200 h-14 sticky top-0">
                <tr>
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Conducted By</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Mode</th>
                  <th className="px-4 py-2">Report Issue</th>
                </tr>
              </thead>
              <tbody >
                {userReport.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 h-12 border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item.conductedBy}</td>
                    <td className="px-4 py-2">{item.time}</td>
                    <td className="px-4 py-2">{item.status}</td>
                    <td className="px-4 py-2">{item.mode}</td>
                    <td className="px-4 py-2">{item.reportIssue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
