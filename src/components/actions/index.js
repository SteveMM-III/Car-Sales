export const ADD    = 'ADD';
export const REMOVE = 'REMOVE';

export const addFeature = features => {
  // console.log(features);
  return {
    type: ADD,
    payload: features
  }
};

export const removeFeature = id => {
  return {
    type: REMOVE,
    payload: id
  }
};