import React from "react";

const EnglishList = ({ items }: { items: Array<any> }): React.ReactElement => {
  return (
    <>
      {items.map((item, i) => (
        <span key={i}>
          {i === items.length - 1 && "and "}
          {item}
          {i !== items.length - 1 && ", "}
        </span>
      ))}
      {"."}
    </>
  );
};

export default EnglishList;
