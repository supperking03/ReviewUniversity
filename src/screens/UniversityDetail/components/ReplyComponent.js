import * as React from 'react';
import './css/ReplyComponent.css'

class ReplyComponent extends React.Component {
  capitalizeFirstLetter = (string) =>
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  formatType = type => {
    if (type === 'like') return 'Tán thành';
    if (type === 'dislike') return 'Phản bác';
    if (type === 'others') return 'Trung lập';
    return '';
  };

  render() {
    const {
      reply: { id, role, type, context },
    } = this.props;

    return (
      <div className="reply-container">
        <div className="row m-0">
          <p className="reply-identification">{this.capitalizeFirstLetter(role)}</p>
          <p className="reply-creation-time">{'02/03/2019'}</p>
        </div>

        <p className={type === 'like' ? 'reply-type' :
          type === 'dislike' ? 'reply-type type-blame' : 'reply-type type-other'}>
          {this.formatType(type)}
        </p>

        <div className="reply-content p-2">
          {context}
        </div>
      </div>
    );
  }
}

export default ReplyComponent;