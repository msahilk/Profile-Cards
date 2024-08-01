import axios from 'axios';

const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    }
})

export const getCustomers = async () => {
    try {
        return await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/customers`,
            getAuthConfig()
        )
    } catch (e) {
        throw e;
    }
}

export const getCustomerData =async () => {

    var customers = await getCustomers();

}

export const saveCustomer = async (customer) => {
    try {
        return await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/customers`,
            customer
        )
    } catch (e) {
        throw e;
    }
}

export const updateCustomer = async (id, update) => {
    try {
        return await axios.put(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/customers/${id}`,
            update,
            getAuthConfig()
        )
    } catch (e) {
        throw e;
    }
}

export const deleteCustomer = async (id) => {
    try {
        return await axios.delete(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/customers/${id}`,
            getAuthConfig()
        )
    } catch (e) {
        throw e;
    }
}

export const login = async (usernameAndPassword) => {
    try {
        return await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/login`,
            usernameAndPassword
        )
    } catch (e) {
        throw e;
    }
}


export const uploadCustomerProfilePicture = async (id, formData) => {
    try {


        return axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/customers/${id}/profile-image`,
            formData,
            {
                ...getAuthConfig(),
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                }
            }
        );
    } catch (e) {
        throw e;
    }
};

export const customerProfilePictureUrl = (id) =>
`${import.meta.env.VITE_API_BASE_URL}/api/v1/customers/${id}/profile-image`

export function getCustomerByEmail(email) {
    const url = `${import.meta.env.VITE_API_BASE_URL}/api/v1/customers/by-email?email=${encodeURIComponent(email)}`;
    const token = localStorage.getItem('jwtToken'); // Assuming the JWT token is stored in localStorage
    return axios.get(url, getAuthConfig())
        .then(response => {
            console.log('Raw response data:', response.data); // Log the raw response data
            return response.data;
        })
        .catch(error => {
            if (error.response) {
                console.error('Error response data:', error.response.data); // Log the error response data
                if (error.response.status === 404) {
                    throw new Error(`Customer with email [${email}] not found`);
                } else {
                    throw new Error(`Error: ${error.response.status} - ${error.response.statusText}, ${error.response.data.message}`);
                }
            } else {
                throw new Error('An error occurred while fetching the customer');
            }
        });
}



