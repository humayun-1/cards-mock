import React from "react";

/**
 * Default Wrapper, shows inner child structured in grid
 * @param props React component props
 * @returns
 */
const ContentLayout: React.FC<any> = (props) => {
  return (
    <main className="unagi-app-container container-fluid container-xl">
      <div className="h-100">
        <div className="container h-100">{props.children}</div>
      </div>
    </main>
  );
};

export default ContentLayout;
