import React from 'react';

const RendererTypeChoice = props => {
    return (
        <div className="RendererTypeChoice">
            <span>Cell renderer type:</span>
            <label>
                <input type="radio" name="rendererType" value=""
                    onChange={props.onChange} defaultChecked />
                Not set
             </label>
            <label>
                <input type="radio" name="rendererType" value="vanillaFunction"
                    onChange={props.onChange} />
                Vanilla JS function
            </label>
            <label>
                <input type="radio" name="rendererType" value="reactClass"
                    onChange={props.onChange} />
                React class component
            </label>
            <label>
                <input type="radio" name="rendererType" value="reactFunction"
                    onChange={props.onChange} />
                React function component
            </label>
        </div>
    );
};

export default RendererTypeChoice;