import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    location: "",
    minCustomers: "",
    maxCustomers: "",
    avgCookies: "",
  });

  const [reportText, setReportText] = useState("");

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const report = generateReport(formData);
    setReportText(report);
  }

  function generateReport(data) {
    // Logic to generate the report based on the form data
   
    return `Report for ${data.location}:
    Minimum Customers: ${data.minCustomers}
    Maximum Customers: ${data.maxCustomers}
    Average Cookies: ${data.avgCookies}`;
  }

  return (
    <>
      <Header />
      <main>
        <Form
          formData={formData}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        />
        <p>{reportText}</p>
      </main>
      <footer className="p-4 mt-8 bg-green-500 text-gray-50">
        &copy;2023
      </footer>
    </>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between p-5 bg-green-500 font-bold text-3xl">
      <h1>Cookie Stand Admin</h1>
    </header>
  );
}

function Form({ formData, handleFormChange, handleFormSubmit }) {
  return (
    <>
      <form
        className="w-1/2 mx-auto my-4 bg-green-200 p-4"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-8">
          <div className="flex items-center">
            <label className="block mr-4">Location</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleFormChange}
              className="w-full p-2"
            />
          </div>
        </div>

        <div className="mb-8 flex">
          <div className="mr-8">
            <label className="block mb-6">Minimum Customers per hour</label>
            <input
              name="minCustomers"
              value={formData.minCustomers}
              onChange={handleFormChange}
              className="w-full p-2"
            />
          </div>
          <div className="mr-8">
            <label className="block mb-6">Maximum Customers per hour</label>
            <input
              name="maxCustomers"
              value={formData.maxCustomers}
              onChange={handleFormChange}
              className="w-full p-2"
            />
          </div>
          <div>
            <label className="block mb-6">Average Cookies per Sale</label>
            <input
              name="avgCookies"
              value={formData.avgCookies}
              onChange={handleFormChange}
              className="w-full p-2"
            />
          </div>
        </div>

        <div className="flex mr-8 mb-0">
          <button className="px-4 py-1 bg-green-600 text-black">Create</button>
        </div>
      </form>
      <p className="mt-4 text-center">Report Table Coming Soon.</p>
    </>
  );
}
