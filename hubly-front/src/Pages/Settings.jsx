import { useState } from 'react';

export default function Settings() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const registerHandler = () => {};
  return (
    <div
      style={{
        margin: '4vh 2vw',
      }}
    >
      <div>Settings</div>
      <div
        style={{
          height: '70vh',
          width: '85vw',
          backgroundColor: '#FAFBFC',
          marginTop: '5vh',
          borderRadius: '20px',
          padding: '2rem',
        }}
      >
        <div style={{}}>
          <p
            style={{
              display: 'inline',

              color: '#184E7F',
              fontWeight:"200",

              borderBottom: '2px solid #184E7F',

              padding: '6px',
            }}
          >
            {' '}
            Edit Profile
          </p>
          <hr
            style={{
              marginTop: '6px',
            }}
          />
        </div>
        <form
          style={{
            width: '70vw',
            height: '80vh',
            alignItems: 'center',
          }}
        >
          <label
            htmlFor="firstName"
            style={{
              marginTop: '3vh',
              display: 'inline-block',
              marginLeft: '1vw',
              textAlign: 'start',
              width: '40vw',
            }}
          >
            {' '}
            First Name{' '}
          </label>
          <br />
          <input
            type="text"
            name="firstName"
            style={{
              width: '40vw',
              height: '5vh',
              backgroundColor: 'white',
              border: '1px solid #828282 ',

              borderRadius: '8px',
              color: 'black',
              margin: '0px 0px 10px 1vw',
              padding: '4px',
            }}
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <br />
          <label
            htmlFor="lastName"
            style={{
              display: 'inline-block',
              marginLeft: '1vw',
              textAlign: 'start',
              width: '30vw',
            }}
          >
            {' '}
            Last Name{' '}
          </label>
          <br />
          <input
            type="text"
            name="lastName"
            style={{
              width: '40vw',
              height: '5vh',
              backgroundColor: 'white',
              border: '1px solid #828282 ',

              borderRadius: '8px',
              color: 'black',
              margin: '0px 0px 10px 1vw',
              padding: '4px',
            }}
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <br />
          <label
            htmlFor="email"
            style={{
              display: 'inline-block',
              marginLeft: '1vw',
              textAlign: 'start',
              width: '30vw',
            }}
          >
            {' '}
            Email{' '}
          </label>
          <br />
          <input
            type="text"
            name="email"
            style={{
              width: '40vw',
              height: '5vh',
              backgroundColor: 'white',
              border: '1px solid #828282 ',

              borderRadius: '8px',
              color: 'black',
              margin: '0px 0px 10px 1vw',
              padding: '4px',
            }}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <br />
          <label
            htmlFor="password"
            style={{
              display: 'inline-block',
              marginLeft: '1vw',
              textAlign: 'start',
              width: '30vw',
            }}
          >
            {' '}
            Password{' '}
          </label>
          <br />
          <input
            type="password"
            name="password"
            style={{
              width: '40vw',
              height: '5vh',
              backgroundColor: 'white',
              border: '1px solid #828282 ',

              borderRadius: '8px',
              color: 'black',
              margin: '0px 0px 10px 1vw',
              padding: '4px',
            }}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <br />
          <label
            htmlFor="confirmPassword"
            style={{
              display: 'inline-block',
              marginLeft: '1vw',
              textAlign: 'start',
              width: '30vw',
            }}
          >
            {' '}
            Confirm Password{' '}
          </label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            style={{
              width: '40vw',
              height: '5vh',
              backgroundColor: 'white',
              border: '1px solid #828282 ',

              borderRadius: '8px',
              color: 'black',
              margin: '0px 0px 10px 1vw',
              padding: '4px',
            }}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />

          <br />
          <button
            style={{
              width: '15vw',
              height: '6vh',
              backgroundColor: 'navy',
              border: '0px solid #EFFOEC',
              color: 'white',
              borderRadius: '10px',
              borderStyle: 'none',
              position: 'relative',
              left: '70vw',

              marginTop: '20px',
              padding: '4px',
            }}
            onClick={registerHandler}
          >
            {' '}
            {isLoading ? 'Creating' : 'Save'}
          </button>
        </form>
      </div>
      
    </div>
  );
}
