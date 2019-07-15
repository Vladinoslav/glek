// import React from "react";
// import { withRouter } from "react-router";
// import axios from "axios"
// export const withAuth = ProtectedRoute => {
//   class PrivateRoute extends React.Component {
//     async componentWillMount() {
//       try {
//         const token = window.sessionStorage.getItem("userToken");
//         const auth = await axios.post("http://localhost:8000/accounts/verify-token", )
//         return auth;
//       } catch (error) {
//         window.sessionStorage.removeItem("token");
//         return this.props.history.push("/login");
//       }
//     }
//     render() {
//       return <ProtectedRoute {...this.props} />;
//     }
//   }
//   return withRouter(PrivateRoute);
// };
