import { ActionTypes } from '../constants/actions';
import { TEST_API, GET_ALL_IMAGES } from '../constants/apiPath';
import { makeGetRequest } from '../utils/makeRequest';

export function getAllImages() {
  return async (dispatch) => {
    try {
      const { data } = await makeGetRequest(GET_ALL_IMAGES);
      dispatch({
        type: ActionTypes.GET_ALL_IMAGES,
        data
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_ALL_IMAGES_FAIL,
        error
      });
    }
  };
}


