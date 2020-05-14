import {
  EVENT_OR_WORK_ADDED,
  ADD_DATA,
  CHANGE_SCROLL_STATUS,
} from "../action-types";

export const addData = (data) => {
  return { type: ADD_DATA, payload: data };
};

export const changeEditStatus = () => {
  return { type: EVENT_OR_WORK_ADDED };
};

export const changeScrollStatus = () => {
  return { type: CHANGE_SCROLL_STATUS };
};
