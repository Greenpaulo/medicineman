import axios from 'axios';

export async function getEssenceByName(name) {
  try {
    const res = await axios.get(`http://localhost:5000/api/v1/essences/${name}`);

    dispatch({
      type: 'GET_ESSENCE_BY_NAME',
      payload: res.data.data[0]
    })
  } catch (err) {
    dispatch({
      type: 'ESSENCE_ERROR',
      payload: err.response.data.error
    })
  }
}

export async function getEssencesByCompany(company) {
  try {
    const res = await axios.get(`http://localhost:5000/api/v1/essences/company/${company}`);

    dispatch({
      type: 'GET_ESSENCES_BY_COMPANY',
      payload: res.data.data
    })
  } catch (err) {
    dispatch({
      type: 'ESSENCE_ERROR',
      payload: err.response.data.error
    })
  }
}