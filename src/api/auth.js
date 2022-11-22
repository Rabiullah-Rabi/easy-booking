export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  //save user in database
  fetch(`${process.env.REACT_APP_SERVER}/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("easy_booking_token", data.token);
    });
};
