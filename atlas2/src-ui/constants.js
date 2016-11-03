/*jshint esversion: 6 */

var keyMirror = require('key-mirror-nested');

module.exports  = keyMirror({
  ACTION_TYPES : {
      WORKSPACE_OPEN_NEW_WORKSPACE_DIALOG : null,
      WORKSPACE_CLOSE_NEW_WORKSPACE_DIALOG : null,
      WORKSPACE_SUBMIT_NEW_WORKSPACE_DIALOG : null,
      WORKSPACE_OPEN_EDIT_WORKSPACE_DIALOG : null,
      WORKSPACE_CLOSE_EDIT_WORKSPACE_DIALOG : null,
      WORKSPACE_SUBMIT_EDIT_WORKSPACE_DIALOG : null,
      MAP_OPEN_NEW_MAP_DIALOG : null,
      MAP_CLOSE_NEW_MAP_DIALOG : null,
      MAP_CLOSE_SUBMIT_NEW_MAP_DIALOG : null,
      MAP_OPEN_EDIT_MAP_DIALOG : null,
      MAP_CLOSE_EDIT_MAP_DIALOG : null,
      MAP_CLOSE_SUBMIT_EDIT_MAP_DIALOG : null,
      MAP_OPEN_EDIT_NODE_DIALOG : null,
      MAP_CLOSE_EDIT_NODE_DIALOG : null,
      MAP_CLOSE_SUBMIT_EDIT_NODE_DIALOG : null,
      PALETTE_DRAG_STOPPED : null,
      MAP_CLOSE_SUBMIT_NEW_NODE_DIALOG : null,
      MAP_CLOSE_NEW_NODE_DIALOG : null,
      DEDUPLICATOR_UNASSIGNED_COMPONENT_DRAG_STARTED : null,
      DEDUPLICATOR_UNASSIGNED_COMPONENT_DRAG_STOPPED : null,
      CANVAS_FOCUS_NODE : null,
      CANVAS_BLUR_NODES : null,
      CANVAS_NODE_DRAGGED : null,
      CANVAS_CONNECTION_CREATED : null,
      CANVAS_CONNECTION_DELETE : null,
      CANVAS_REMOVE_NODE : null,
      WORKSPACE_ARCHIVE : null,
      MAP_ARCHIVE : null,
      NEW_CAPABILITY_WITH_ASSIGN : null,
      ASSIGN_NODE_TO_CAPABILITY : null,
      CLEAR_NODE_ASSIGNEMENT : null,
      MAKE_NODES_REFERENCED : null,
      MAP_REF_SUBMAP : null,
      MAP_SUBMAP : null,
      MAP_CLOSE_NEW_SUBMAP_DIALOG : null,
      SHOW_SUBMAP_DIALOG : null,
      SHOW_REFERENCES_SUBMAP : null,
      CLOSE_REFERENCES_SUBMAP : null
  },
  USERNEED : null,
  EXTERNAL : null,
  INTERNAL : null,
  SUBMAP : null
});
