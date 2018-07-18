import React, { Fragment } from 'react';

class ProjectDetailed extends React.Component {
  render() {
    return (
      <Fragment>
        {/* TODO: Uncomment when there is project data */}
        <div className="col-sm-4">
          {/* <img src={this.props.image} /> This is the project screenshot */}
        </div>
        <div className="offset-sm-1" />
        <div className="col-sm-5">
          {/* <p3>{this.props.title}</p3>
          <p6>{this.props.team}</p6>
          <p>{this.props.description}</p>  This is the project info*/}
        </div>
      </Fragment>
    );
  }
}

export default ProjectDetailed;
