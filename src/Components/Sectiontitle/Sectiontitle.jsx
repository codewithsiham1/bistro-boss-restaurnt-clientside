
const Sectiontitle = ({ heading, subHeading, headingColor, subHeadingColor }) => {
  return (
    <div className="text-center my-8 flex flex-col justify-center items-center">
      <p className={`text-sm italic mb-2 ${subHeadingColor || "text-yellow-400"}`}>
        --- {subHeading} ---
      </p>
      <h3 className={`text-2xl border-b-4 border-t-4 w-3/12 font-bold uppercase ${headingColor || "text-black"}`}>
        {heading}
      </h3>
    </div>
  );
};

export default Sectiontitle;
