const requestUsers = async () => {
  const res = await fetch("http://localhost:3000/users");

  const users = await res.json();

  console.log(users);
};

requestUsers();
