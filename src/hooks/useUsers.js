import { useState } from 'react';
import { loginApi } from 'api/users';

export function useUser() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const login = async (formValue) => {
		try {
			setLoading(true);
			const response = await loginApi(formValue);
			setLoading(false);
			return response;
		} catch (error) {
			setLoading(false);
			setError(error);
			throw error;
		}
	};

	return {
		loading,
		error,
		login,
	};
}
