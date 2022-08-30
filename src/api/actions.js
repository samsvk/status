import * as api from "./index.js";

const getTest = async (param) => {
  try {
    const { data } = await api.test();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getTest };
