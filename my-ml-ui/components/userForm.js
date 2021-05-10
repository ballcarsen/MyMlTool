import styles from '../styles/Form.module.css'

function UserForm() {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('http://127.0.0.1:8000/users/', {
      body: JSON.stringify({
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        password: event.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
  }

  return (
    <div className={styles.container}>
      <form onSubmit={registerUser}>
        <label htmlFor="first_name">First Name</label>
        <input id="first_name" name="first_name" type="text" required />
        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" name="last_name" type="text" required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="text" required />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default UserForm
