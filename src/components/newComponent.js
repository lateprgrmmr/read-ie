import React, { useState } from "react";
import "../News.css";
import { Button } from "@mui/material";

const initialSteps = [
  {
    id: 0,
    name: "Components: UI Building Blocks",
    description:
      "https://medium.com/@muhammadjahanzaib_1449/react-components-building-blocks-of-ui-b27fc88006a4",
    isCompleted: false,
  },
  {
    id: 1,
    name: "Defining a Component",
    description: "https://react.dev/learn/your-first-component",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Using a Component",
    description: "https://react.dev/",
    isCompleted: false,
  },
];

export function News() {
  const [steps, setSteps] = useState(initialSteps);

  function handleToggle(stepId, nextCompleted) {
    setSteps(
      steps.map((step) => {
        if (step.id === stepId) {
          return { ...step, isCompleted: nextCompleted };
        } else {
          return step;
        }
      })
    );
  }

  return (
    <article>
      <h1 className="article">My First Component</h1>
      <div className="article">
        <NewsList steps={steps} onToggle={handleToggle} />
      </div>
    </article>
  );
}

function NewsList({ steps, onToggle }) {
  return (
    <ul>
      {steps.map((step) => (
        <li key={step.id}>
          <input
            type="checkbox"
            checked={step.isCompleted}
            onChange={(e) => {
              onToggle(step.id, e.target.isCompleted);
            }}
          />
          <label>
            {step.name}
            <a href={step.description} target="_blank" rel="noreferrer">
              <Button>Click to Learn More</Button>
            </a>
          </label>
        </li>
      ))}
    </ul>
  );
}
