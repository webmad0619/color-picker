import React, { Component } from 'react'

export default class Colorpicker extends Component {
    render() {
        let chosenColor;

        if (this.props.chosenColor) {
            chosenColor = this.props.chosenColor
        }   else {
            chosenColor = "#fabada"
        }
        return (
            <div style={{background: chosenColor}}>
                {
                    chosenColor
                }
            </div>
        )
    }
}
