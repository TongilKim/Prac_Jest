import React from 'react'
import './button.css';
export default function button({label}) {
    return (
        <div data-testid="button" className="btn-style">
         {label} 
        </div>
    )
}
