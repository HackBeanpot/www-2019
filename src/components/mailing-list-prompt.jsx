import React from 'react';

const MailingListPrompt = props => (
    <div>
        <input placeholder={props.placeholder} />
        <button>Do it</button>
    </div>
);
MailingListPrompt.defaultProps = {
    placeholder: "Join our mailing list!"
};


export default MailingListPrompt;
