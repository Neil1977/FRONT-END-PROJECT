import ksb from "./ksbData";
import Card from "./Card";

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
