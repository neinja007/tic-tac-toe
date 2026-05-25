import type { Context } from 'remix/ui';

export const HomePage = (context: Context) => {
	return context.render(
		<div>
			<h1>Welcome to Remix!</h1>
			<p>
				This is the home page. You can edit this page in <code>app/ui/pages/home.tsx</code>.
			</p>
		</div>
	);
};
