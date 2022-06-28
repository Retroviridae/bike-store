import { useState, useEffect } from "react";

function Count( {count} ) {
console.log(count)
  return (
    <div className="Count">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default Count;