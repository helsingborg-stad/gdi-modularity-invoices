import { useState } from "react";
import { Case } from "../../../about-me-service/AboutMeContext";
import { sortyBy } from "../../../util";
import CasesTabView from "./components/CasesTabView";

const normalizeCases = (cases: Case[]): Case[] =>
  sortyBy(cases, (c) => c.updateTime, "desc").map((c) => ({
    ...c,
    events: sortyBy(c.events || [], (e) => e.updateTime, "desc"),
  }));

const CasesView = ({ cases }: { cases: Case[] }): JSX.Element => {
  const [normalizedCases] = useState(normalizeCases(cases));
  return <CasesTabView cases={normalizedCases} />;
};

export default CasesView;
