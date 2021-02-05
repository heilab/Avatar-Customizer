import React, { Component } from "react";
import * as THREE from "three";

import ColorPicker from "../../color-picker";
import Swatches from "../../color-picker2"

import PropTypes from "prop-types";

import EditorUtils from "../editor-utils";
import {EditorPage} from "../../editor-page"

import Material from "../../material"

import sample from "./sample.png";

var assets = {
  pic: {
    selected: sample,
    textures: [sample],
    materials: []
  },
}

export default class HeadEditor extends Component {
    constructor(props) {
      super(props);

      assets.pic.materials = [
        new Material(this.props.model.material.clone(), "Pic", assets.pic.textures, false, true, 439, 9, 140, 270, true)
      ];

      this.materials = [
        ...assets.pic.materials
      ]
      this.editorPage = React.createRef();
    }

    onChangeHandler(e) {
      this.props.onChange(e.target.value);
    }

    render() {
      return (
        <EditorPage ref={this.editorPage}>
            <label>Face Picture (Upload your face as PNG image!)</label>
            <div>
            <Swatches
              selected={assets.pic.selected}
              textures={assets.pic.textures}
              canDisable={false}
              canUpload={true}
              material={assets.pic.materials}
              />
            </div>
        </EditorPage>
      );

    }
}
