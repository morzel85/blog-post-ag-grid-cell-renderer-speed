import React from 'react';

import {
    NO_RENDERER,
    VANILLA_FUNCTION,
    REACT_CLASS,
    REACT_FUNCTION
} from './renderers/rendererTypeNames';

const RendererTypeChoice = props => {
    return (
        <div className="RendererTypeChoice">
            <span>Cell renderer type:</span>
            <label>
                <input type="radio" name="rendererType" value={NO_RENDERER}
                    onChange={props.onChange} defaultChecked />
                Not set
             </label>
            <label>
                <input type="radio" name="rendererType" value={VANILLA_FUNCTION}
                    onChange={props.onChange}  />
                Vanilla JS function
            </label>
            <label>
                <input type="radio" name="rendererType" value={REACT_CLASS}
                    onChange={props.onChange}  />
                React class component
            </label>
            <label>
                <input type="radio" name="rendererType" value={REACT_FUNCTION}
                    onChange={props.onChange}  />
                React function component
            </label>
        </div>
    );
};

export default RendererTypeChoice;