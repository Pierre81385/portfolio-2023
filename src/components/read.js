import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Comment = (props) => (
  <tr>
    <td>{props.comment.name}</td>
    <td>{props.comment.comment}</td>
    <td>{props.comment.date}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.comment._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.comment._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function CommentList() {
  const [comments, setComments] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getComments() {
      const response = await fetch(`http://localhost:5050/comment/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const comments = await response.json();
      setComments(comments);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5050/comment/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function commentList() {
    return comments.map((comment) => {
      return (
        <Comment
          comment={comment}
          deleteComment={() => deleteComment(comment._id)}
          key={comment._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Comment List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}
