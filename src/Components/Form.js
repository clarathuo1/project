// import React, { useState } from "react";
// import "../App.css";
// // import * as yup from 'yup';
// // import { useFormik } from 'formik';

// function Form() {
//   const [submittedData, setSubmittedData] = useState([]);
//   const [error, setError] = useState(null);

//   const formSchema = yup.object().shape({
//     firstName: yup.string().required("First name is required").max(15),
//     lastName: yup.string().required("Last name is required").max(15),
//     review: yup.string().required("Review is required").min(10),
//   });

//   const formik = useFormik({
//     initialValues: { firstName: "", lastName: "", review: "" },
//     validationSchema: formSchema,
//     onSubmit: (values, { resetForm }) => {
//       setSubmittedData([...submittedData, values]);
//       resetForm();
//     },
//   });

//   return (
//     <div className='form-container'>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={formik.handleSubmit} className='feedback-form'>
//         <input type='text' onChange={formik.handleChange} value={formik.values.firstName} name="firstName" placeholder='First Name' />
//         <p style={{ color: "red" }}>{formik.errors.firstName}</p>
        
//         <input type='text' onChange={formik.handleChange} value={formik.values.lastName} name="lastName" placeholder='Last Name' />
//         <p style={{ color: "red" }}>{formik.errors.lastName}</p>
        
//         <textarea onChange={formik.handleChange} value={formik.values.review} name="review" placeholder='Your Review' />
//         <p style={{ color: "red" }}>{formik.errors.review}</p>
        
//         <button type='submit'>Submit</button>
//       </form>
      
//       <h3>Submissions</h3>
//       <div>
//         {submittedData.map((data, index) => (
//           <div key={index}><strong>{data.firstName} {data.lastName}</strong><p>{data.review}</p></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Form;