import { ksb } from "./ksbData.jsx";
import Card from "./Card.jsx";
const { knowledge, skills, behaviours } = ksb;
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
