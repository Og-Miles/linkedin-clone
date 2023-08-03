import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import { FiberManualRecordRounded } from "@mui/icons-material";

function Widgets() {
  const Articles = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__article__left">
        <FiberManualRecordRounded />
      </div>
      <div className="widgets__article__right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__title">
        <h2>NewsLetter</h2>
        <InfoIcon />
      </div>
      {Articles(
        "Get started with our new features",
        "Latest news - 623 readers"
      )}
      {Articles(
        "Barcelona loses dembele to PSG for 25M",
        "Latest news - 137 readers"
      )}
      {Articles("Dollar rises at 865 to naira", "Latest news - 849 readers")}
      {Articles(
        "Pounds increases steadily - now at 1137",
        "Latest news - 623 readers"
      )}
      {Articles(
        "X (formerly known as twitter) has now added a video download feature",
        "Latest news - 623 readers"
      )}
      {Articles(
        "Thread continue to lose active users",
        "Latest news - 623 readers"
      )}
      {Articles(
        "Niger: US announces partial evacuation of embassy",
        "Latest news - 623 readers"
      )}
      {Articles(
        "Passenger nabbed for 'stealing N1M' on board Air Peace",
        "Latest news - 623 readers"
      )}
      {Articles(
        "Nigerian Government asks google to Remove 18 DIgital Loan Apps",
        "Latest news - 623 readers"
      )}
    </div>
  );
}

export default Widgets;
