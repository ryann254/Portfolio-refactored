import {
  EVENT_OR_WORK_ADDED,
  ADD_DATA,
  CHANGE_SCROLL_STATUS,
  DELETE_COMMENT,
  GET_ALL_COMMENTS,
  COMMENT_DB_ERRORS,
} from "../action-types";

export const addData = (data) => {
  return { type: ADD_DATA, payload: data };
};

export const getAllComments = (data) => {
  return { type: GET_ALL_COMMENTS, payload: data };
};

export const getErrors = (data) => {
  return { type: COMMENT_DB_ERRORS, payload: data };
};

export const changeEditStatus = () => {
  return { type: EVENT_OR_WORK_ADDED };
};

export const changeScrollStatus = () => {
  return { type: CHANGE_SCROLL_STATUS };
};

export const deleteComment = (id) => {
  return { type: DELETE_COMMENT, payload: id };
};
