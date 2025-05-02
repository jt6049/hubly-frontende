export const API_URL = import.meta.env.VITE_API_URL;
 
export async function register({ data }) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    }, //extra info that is sent with the request. such as info type, the type of request.
  });
  return response;
}

export async function login({ data }) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    }, //extra info that is sent with the request. such as info type, the type of request.
  });
  return response;
}

export async function complainer({ data }) {
    const response = await fetch(`${API_URL}/complainer`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      }, //extra info that is sent with the request. such as info type, the type of request.
    });
    return response;
  }

  export async function messageToSupport({ data }) {
    const response = await fetch(`${API_URL}/message/complainertosupport`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
        "Authorization":`${localStorage.getItem("token")}`
      }, //extra info that is sent with the request. such as info type, the type of request.
    });
    return response;
  }

  export async function   messageToUser({ data }) {
    const response = await fetch(`${API_URL}/message/supportToComplainer`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
        "Authorization":`${localStorage.getItem("token")}`
      }, //extra info that is sent with the request. such as info type, the type of request.
    });
    return response;
  }

  export const sendMessage = async ({data}, chatRoomId) => {
    return await fetch(`${API_URL}/message/${chatRoomId}/messages`, {
      method: "POST",
       body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization:`${localStorage.getItem("token")}`,
      },
     
    });
  };



  export async function getMessages() {
    const response = await fetch(`${API_URL}/message/`, {
      
      headers: {
      
        "Authorization":`${localStorage.getItem("token")}`
      }, //extra info that is sent with the request. such as info type, the type of request.
    });
    return response;
  }

  export async function addMember({ data }) {
    const response = await fetch(`${API_URL}/user/assign-member`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
        "Authorization":`${localStorage.getItem("token")}`
      }, //extra info that is sent with the request. such as info type, the type of request.
    });
    return response;
  }

  export async function getMembers() {
    const response = await fetch(`${API_URL}/user/get-members`, {
      
      headers: {
      
        "Authorization":`${localStorage.getItem("token")}`
      }, //extra info that is sent with the request. such as info type, the type of request.
    });
    return response;
  }

  export async function updateChatStatus(chatRoomId, status) {
    const response= await fetch(`${API_URL}/message/${chatRoomId}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`
      },
      body: JSON.stringify( {status} )
    });
    return response;
  };