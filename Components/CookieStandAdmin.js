import React, { useState } from 'react';
import Header from './Header';
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';
import Footer from './Footer';

export default function CookieStandAdmin() {
  const [reports, setReports] = useState([]);
  const [showOverview, setShowOverview] = useState(false);

  const handleOverviewClick = () => {
    setShowOverview(!showOverview);
  };

  return (
    <div>
      <Header handleOverviewClick={handleOverviewClick} />
      <main>
        <CreateForm setReports={setReports} hourlySales={data.hourly_sales} />
        {showOverview ? <ReportTable reports={reports} /> : null}
      </main>
      <Footer totalLocations={reports.length} />
    </div>
  );
}
