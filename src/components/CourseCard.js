import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function ({ course }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div class="card">
      <header class="card-header">
        <a class="card-header-title" href={course.link}>
          {course.name} ({course.code})
        </a>
        <button class="card-header-icon" onClick={() => handleClick()} aria-label="more options">
          {/* <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span> */}
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </header>
      {isExpanded && (
        <div class="card-content">
          {course.desc}
        </div>
      )
      }
    </div>
  );
}
