/* NEEDS CARD/COMPONENTS/ASSETS/LAYOUT/PAGES SUBFOLDERS IN DIRECTORY?/ jsX? */
export default function Card({ ksb }) {
  return (
    <div className="grid gap-4 grid-cols-5 p-2 place-content-center">
      <h1 className="col-span-1 mx-2 text-lg text-center">{ksb.title}:</h1>
      <p className="col-span-4">{ksb.text}</p>
    </div>
  );
}