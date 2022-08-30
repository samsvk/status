import * as api from "./index.js";

const getTest = async (param) => {
  try {
    const { data } = await api.test();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createNewEmail = async (param, setReturnedValue) => {
  try {
    const { data } = await api.createNewEmail(param);
    console.log(data);
    setReturnedValue(data);
  } catch (error) {
    console.log(error);
  }
};

export { getTest, createNewEmail };
