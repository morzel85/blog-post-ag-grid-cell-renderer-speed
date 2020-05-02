import React from 'react';

const StaticMarkupChoice = props => {
    return (
        <div className="StaticMarkupChoice">
            <label>
                <input type="checkbox" name="disableStaticMarkup"
                    onChange={props.onChange} checked={props.disableStaticMarkup} />
                disableStaticMarkup (grid option)
             </label>
        </div>
    );
};

export default StaticMarkupChoice;