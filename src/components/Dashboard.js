/**
 * Top Level `Dashboard` Component.
 *
 * @author Mayur Borse <mayur@hyphenos.io>
 */
import React, { useState, useCallback } from "react";
import Table from "./Table";
import PacketDetailsViewer from "./PacketDetailsViewer";
import "./Dashboard.css";

const Dashboard = ({ packets, config }) => {
  /**
   * selectedPacket will be rendered by PacketDetailsViewer if not empty
   */
  const [selectedPacket, setSelectedPacket] = useState(null);

  /**
   * Toggles selected packet between received packet object or empty object {}
   * param {object} packet - Selected packet object
   * useCallback hook invokes this functions only when packet is selected in Table.
   */
  const getSelectedPacket = useCallback((packet) => {
    setSelectedPacket(selectedPacket ? null : packet);
  }, []);

  /**
   * Config objects are passed to respective components.
   */
  const { dashboardConfig, tableConfig, detailsConfig } = config;

  return (
    <div className="packet-dashboard">
      {packets && (
        <Table
          getSelectedPacket={getSelectedPacket}
          packets={packets}
          config={tableConfig}
        />
      )}

      {dashboardConfig?.showSelectedDetails && selectedPacket && (
        <PacketDetailsViewer
          selectedPacket={selectedPacket}
          config={detailsConfig}
        />
      )}
    </div>
  );
};
export default Dashboard;
