import React, { useEffect, useState } from "react";
import API from "../api";

function TestFetch() {
	  const [children, setChildren] = useState([]);

	  useEffect(() => {
		      API.get("/children")
		        .then((res) => {
				        console.log("Response:", res.data);
				        setChildren(res.data);
				      })
		        .catch((err) => console.error("Error fetching children:", err));
		    }, []);

	  return (
		      <div>
		        <h2>Children Data</h2>
		        <ul>
		          {children.map((child) => (
				            <li key={child._id}>{child.name}</li>
				          ))}
		        </ul>
		      </div>
		    );
}

export default TestFetch;

