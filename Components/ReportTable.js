import React from 'react';

export default function ReportTable({ reports }) {
  return (
    <div className="mt-4">
      {reports.length === 0 ? (
        <h2 className="text-red-600 text-xl font-semibold">
          No Cookie Stands Available
        </h2>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Location</th>
              <th className="border p-2">Minimum Customers</th>
              <th className="border p-2">Maximum Customers</th>
              <th className="border p-2">Average Cookies</th>
              <th className="border p-2">Total Cookies</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="border">
                {report.split('\n').map((line, lineIndex) => (
                  <td key={lineIndex} className="border p-2">
                    {line.split(':')[1]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t">
              <td className="border p-2 font-semibold">Total</td>
              <td className="border p-2">{calculateColumnTotal(reports, 1)}</td>
              <td className="border p-2">{calculateColumnTotal(reports, 2)}</td>
              <td className="border p-2"></td>
              <td className="border p-2">{calculateColumnTotal(reports, 4)}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

function calculateColumnTotal(reports, columnIndex) {
  const total = reports.reduce((sum, report) => {
    const reportLines = report.split('\n');
    const columnValue = parseFloat(reportLines[columnIndex].split(':')[1].trim());
    return sum + columnValue;
  }, 0);
  
  return total.toFixed(2); 
}
