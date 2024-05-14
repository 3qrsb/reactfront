import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token'); // Assume the token is stored in localStorage
                const response = await axios.get('http://localhost:4000/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(response.data);
            } catch (err) {
                setError('Failed to fetch profile');
            }
        };

        fetchProfile();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Full Name:</strong> {profile.fullName}</p>
            <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
            <p><strong>Address:</strong> {profile.address}</p>
        </div>
    );
};

export default UserProfile;