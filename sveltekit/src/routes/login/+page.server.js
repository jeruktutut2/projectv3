/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		// TODO log the user in
        const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
        console.log("email:", email);
        console.log("password:", password);
        
        
	}
};