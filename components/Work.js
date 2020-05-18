import _ from "lodash";
import React from "react";
import ProjectAPI from "../ProjectAPI";
import Thumbnail from "./Thumbnail/Thumbnail";
import posed, { PoseGroup } from "react-pose";
import ProjectFilters from "./ProjectFilters/ProjectFilters";

const Item = posed.div({
  enter: { y: 0, x: 0, opacity: 1 },
  exit: { y: -50, x: 0, opacity: 0 },
  flip: {
    scale: 1,
    transition: {
    //   scale: {
    //     type: "spring",
    //     velocity: 10
    //   },
      default: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      }
    }
  }
});

export default ({}) => {
  const [type, setType] = React.useState("all");
  const [items, setItems] = React.useState(ProjectAPI.byProperty({ type }));
  return (
    <div type={type}>
      <ProjectFilters
        handleType={newType => {
          setType(newType);
          setItems(ProjectAPI.byProperty({ type: newType }));
        }}
      />
      <div className="work-wrapper">
        <PoseGroup
          animateOnMount={false} enterPose='enter' exitPose='exit'
        >
          {items.map(thumb => (
            <Item key={thumb.number}>
              <Thumbnail
                name={thumb.name}
                src={thumb.src}
                number={thumb.number}
                id={thumb.id}
              />
            </Item>
          ))}
        </PoseGroup>
      </div>
    </div>
  );
};

