import instance from "./API_rule";

const article = async () => {
  let url = "/itemsGet";
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};


export default article;