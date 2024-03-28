// import { useEffect } from "react";
// import { toast } from "react-toastify";
// import { getAllCareGivers } from "../../services/http-request";
// import { getCookie } from "../../context/setCookie";

const CaregivingDetail = () => {
  // const token = getCookie("token");

  // useEffect(() => {
  //   if (token) {
  //     try {
  //       getAllCareGivers()
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .then((data) => {
  //           if (data) {
  //             toast.success("get caregivers Successfully!");
  //           } else {
  //             toast.error(JSON.stringify(data));
  //           }
  //         });
  //     } catch (error) {
  //       console.error("Error:", error);
  //       toast.error(JSON.stringify(error));
  //     }
  //   }
  // }, []);

  return (
    <>
      <div className="container parent-container">Caregiving Detail</div>
    </>
  );
};

export default CaregivingDetail;
