import Axios from "axios";

//fungsi memanggil fungsi
//asychronus menggunakan callback
export const setDataBlog = (page) => (dispatch) => {
  return Axios.get(`http://localhost:4000/v1/blog/posts?perPage=2&page=${page}}`)
    .then((result) => {
      const responseAPI = result.data;
      // setDataBlog(responseAPI.data);

      console.log(responseAPI);
      dispatch({
        type: "UPDATE_DATA_BLOG",
        payload: responseAPI.data,
      });

      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          current_page: responseAPI.current_page,
          total_page: Math.ceil(responseAPI.total_data / responseAPI.per_page),
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const setDataBlog = () => {
//   return (dispatch) => {
//     Axios.get("http://localhost:4000/v1/blog/posts")
//       .then((result) => {
//         const responseAPI = result.data;
//         // setDataBlog(responseAPI.data);
//         dispatch({
//           type: "UPDATE_DATA_BLOG",
//           payload: responseAPI.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
