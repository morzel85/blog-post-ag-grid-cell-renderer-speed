import React from 'react';

import {
    NO_RENDERER,
    VANILLA_FUNCTION,
    REACT_CLASS,
    REACT_FUNCTION
} from './renderers/rendererTypeNames';

const TypeChoice = props => {
    return (
        <div className="TypeChoice">
            <span>Cell renderer type:</span>
            <label>
                <input type="radio" name="rendererType" value={NO_RENDERER}
                    onChange={props.onChange} checked={props.type === NO_RENDERER} />
                Not set
             </label>
            <label>
                <input type="radio" name="rendererType" value={VANILLA_FUNCTION}
                    onChange={props.onChange} checked={props.type === VANILLA_FUNCTION} />
                Vanilla JS function
            </label>
            <label>
                <input type="radio" name="rendererType" value={REACT_CLASS}
                    onChange={props.onChange} checked={props.type === REACT_CLASS} />
                React class component
            </label>
            <label>
                <input type="radio" name="rendererType" value={REACT_FUNCTION}
                    onChange={props.onChange} checked={props.type === REACT_FUNCTION} />
                React function component
            </label>
        </div>
    );
};

export default TypeChoice;