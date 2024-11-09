import React from "react";
import { CiBookmark } from "react-icons/ci";

function BookmarkCount() {
  const BookmarkCount = 5;
  return (
    <>
      {BookmarkCount}
      <CiBookmark />
    </>
  );
}

export default BookmarkCount;
