import React from "react";
import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";
class Directory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "hat",
          imageUrl: "https://www.volusion.com/blog/content/images/2018/09/iStock-695474264.jpg",
          id: 1,
        },
        {
          title: "women",
          imageUrl: "https://www.volusion.com/blog/content/images/2018/09/iStock-578084554.jpg",
          id: 2,
        },
        {
          title: "man",
          imageUrl: "https://www.volusion.com/blog/content/images/2018/09/Screen-Shot-2018-09-10-at-2.41.18-PM--2-.png",
          id: 3,
        },
        {
          title: "monkey",
          imageUrl: "https://www.volusion.com/blog/content/images/2018/09/iStock-905879078.jpg",
          id: 4,
          size: 'large'
        },
        {
          title: "horse",
          imageUrl: "http://www.modescope.com/blog/wp-content/uploads/2015/09/Cover-Fashion-eCommerce-Shopping-Online-App-e1441296361208.jpg",
          id: 5,
          size: 'large'
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title}  imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    );
  }
}


export default Directory