import React from 'react'
import "./styles.pcss";

// const ProjectFilters = () => (
//
//     <div project="filter">
//         <div filter="all">
//             <p>All</p>
//         </div>
//         <div filter="product">
//             <p>Product</p>
//         </div>
//         <div filter="visual">
//             <p>Visual</p>
//         </div>
//     </div>
//
// );

class ProjectFilters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div project="filter">
                <div filter="all" onClick={(e) => this.props.handleType("all", e)}>
                    <p>All</p>
                </div>
                <div filter="product" onClick={(e) => this.props.handleType("product", e)}>
                    <p>Product</p>
                </div>
                <div filter="visual" onClick={(e) => this.props.handleType("visual", e)}>
                    <p>Visual</p>
                </div>
            </div>
        )
    }
}

export default ProjectFilters

