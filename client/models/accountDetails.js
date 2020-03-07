export const accountDetails = ({ email, name, surname }) => (`
  <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="lead">Email address</span>
      ${email}
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="lead">Name</span>
      ${name}
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="lead">Surname</span>
      ${surname}
    </li>
  </ul>
`);