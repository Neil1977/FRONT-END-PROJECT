import { ksb } from "./ksbData.jsx";
const { knowledge, skills, behaviours } = ksb;
import Card from "./Standards.jsx";
console.log(knowledge.map((k) => k));
export default function Standards() {
  return (
    <>
      {knowledge.map((k) => (
        <Card key={ksb.title} ksb={k} />
      ))}
    </>
  );
}
