import { useContext, useState } from "react";
import { Case } from "../../../../about-me-service/AboutMeContext";
import TabView from "../../../../components/TabView";
import PhraseContext from "../../../../phrase/PhraseContext";
import { groupBy } from "../../../../util";
import CaseView from "./CaseView";

const StatusHintMapping: Record<string, string> = {
  approved: "inprogress",
  rejected: "inprogress",
  closed: "closed",
  incomplete: "todo",
};

const renderCases = (items: Case[]) => (
  <div>
    {items.map((data) => (
      <CaseView key={data.caseId} {...{ data }} />
    ))}
  </div>
);

const CasesTabView = ({ cases }: { cases: Case[] }) => {
  const { phrase } = useContext(PhraseContext);

  const [groupedCases] = useState(
    groupBy(
      cases,
      ({ statusHint }) =>
        StatusHintMapping[statusHint || "approved"] ||
        StatusHintMapping["approved"]
    )
  );

  const [tabs] = useState([
    {
      label: phrase("cases.grouping.all", "Alla"),
      tabContent: () => renderCases([...cases]),
    },
    {
      label: phrase("cases.grouping.todo", "Att Göra"),
      tabContent: () => renderCases([...(groupedCases["todo"] ?? [])]),
    },
    {
      label: phrase("cases.grouping.inprogress", "Pågående"),
      tabContent: () => renderCases([...(groupedCases["inprogress"] ?? [])]),
    },
    {
      label: phrase("cases.grouping.closed", "Avslutade"),
      tabContent: () => renderCases([...(groupedCases["closed"] ?? [])]),
    },
  ]);
  return <TabView tabs={tabs} />;
};

export default CasesTabView;
