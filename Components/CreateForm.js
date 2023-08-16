import React, { useState } from 'react';

export default function CreateForm({ setReports, hourlySales }) {
  const [formData, setFormData] = useState({
    location: '',
    minCustomers: '',
    maxCustomers: '',
    avgCookies: '',
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newReport = generateReport(formData);
    setReports((prevReports) => [...prevReports, newReport]);
    setFormData({
      location: '',
      minCustomers: '',
      maxCustomers: '',
      avgCookies: '',
    });
  };

  const generateReport = (data) => {
    const totalCookies = calculateTotalCookies(data.avgCookies);
    return `Report for ${data.location}:
    Minimum Customers: ${data.minCustomers}
    Maximum Customers: ${data.maxCustomers}
    Average Cookies: ${data.avgCookies}
    Total Cookies Sold: ${totalCookies}`;
  };

  const calculateTotalCookies = (avgCookies) => {
    const totalCookies = hourlySales.reduce(
      (sum, sales) => sum + sales * avgCookies,
      0
    );
    return totalCookies.toFixed(2);
  };

  return (
    <div className="bg-green-200 p-4">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleFormChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/3 mr-2">
            <label className="block mb-1 font-semibold">Minimum Customers per hour</label>
            <input
              type="number"
              name="minCustomers"
              value={formData.minCustomers}
              onChange={handleFormChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="w-1/3 mx-2">
            <label className="block mb-1 font-semibold">Maximum Customers per hour</label>
            <input
              type="number"
              name="maxCustomers"
              value={formData.maxCustomers}
              onChange={handleFormChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="w-1/3 ml-2">
            <label className="block mb-1 font-semibold">Average Cookies per Sale</label>
            <input
              type="number"
              step="0.01"
              name="avgCookies"
              value={formData.avgCookies}
              onChange={handleFormChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded">Create</button>
      </form>
    </div>
  );
}
